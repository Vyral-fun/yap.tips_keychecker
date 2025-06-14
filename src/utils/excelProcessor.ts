import * as XLSX from 'xlsx';
import { promises as fs } from 'fs';
import path from 'path';

interface EligibilityData {
  key: string;
  isEligible: boolean;
  redirectPage?: string;
}

interface ExcelRow {
  key: string;
  isEligible: boolean;
  redirectPage: string;
}

export async function checkEligibility(key: string): Promise<EligibilityData> {
  try {
    // Read the Excel file from the public directory
    const filePath = path.join(process.cwd(), 'public', 'eligibility.xlsx');
    const fileBuffer = await fs.readFile(filePath);
    const workbook = XLSX.read(fileBuffer);
    
    // Get the first worksheet
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Convert the worksheet to JSON with header row
    const data = XLSX.utils.sheet_to_json<ExcelRow>(worksheet, {
      raw: false,
      defval: null
    });

    console.log('Excel data:', data); // Debug log
    console.log('Searching for key:', key); // Debug log

    // Find the matching key in the data
    const match = data.find((row) => row.key === key);
    console.log('Found match:', match); // Debug log

    if (match) {
      // Return the exact data from the Excel file
      const result = {
        key: match.key,
        isEligible: match.isEligible,
        redirectPage: match.redirectPage
      };
      console.log('Returning result:', result); // Debug log
      return result;
    }

    // If no match found, return not eligible
    const defaultResult = {
      key,
      isEligible: false,
      redirectPage: 'not-eligible'
    };
    console.log('Returning default result:', defaultResult); // Debug log
    return defaultResult;
  } catch (error) {
    console.error('Error processing Excel file:', error);
    throw new Error('Failed to process eligibility check');
  }
} 