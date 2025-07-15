import { parse as csvParse } from 'csv-parse/sync';
import { promises as fs } from 'fs';
import path from 'path';

interface EligibilityResult {
  status: 'whitelist' | 'eligible' | 'not_eligible';
  redirectPage: string;
}

// Define a type for CSV rows
interface WalletRow {
  wallet_address: string;
}

export async function checkEligibility(walletAddress: string): Promise<EligibilityResult> {
  try {
    // Helper to read and parse CSV
    const readCSV = async (filename: string) => {
      const filePath = path.join(process.cwd(), 'public', filename);
      const fileContent = await fs.readFile(filePath, 'utf8');
      return csvParse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
      }) as WalletRow[];
    };

    // Normalize address for case-insensitive match
    const normalize = (addr: string) => addr.trim().toLowerCase();
    const inputAddress = normalize(walletAddress);

    // Check whitelist
    const whitelistRows = await readCSV('whitelist.csv');
    if (whitelistRows.some((row: WalletRow) => normalize(row.wallet_address) === inputAddress)) {
      return { status: 'whitelist', redirectPage: 'whitelist' };
    }

    // Check eligible
    const eligibleRows = await readCSV('eligible.csv');
    if (eligibleRows.some((row: WalletRow) => normalize(row.wallet_address) === inputAddress)) {
      return { status: 'eligible', redirectPage: 'eligible' };
    }

    // Not found
    return { status: 'not_eligible', redirectPage: 'not-eligible' };
  } catch (error) {
    console.error('Error processing CSV files:', error);
    throw new Error('Failed to process eligibility check');
  }
} 