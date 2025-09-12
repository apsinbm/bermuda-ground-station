#!/usr/bin/env tsx

/**
 * Script to submit all website URLs to IndexNow
 * Run with: npx tsx scripts/submit-indexnow.ts
 */

import { submitAllUrls, getAllWebsiteUrls } from '../lib/indexnow';

async function main() {
  console.log('🚀 Atlantic Ground Station - IndexNow URL Submission');
  console.log('================================================');
  
  const urls = getAllWebsiteUrls();
  console.log(`📋 Submitting ${urls.length} URLs to IndexNow:`);
  urls.forEach((url, index) => {
    console.log(`   ${index + 1}. ${url}`);
  });
  
  console.log('\n⏳ Submitting to IndexNow API...');
  
  try {
    const result = await submitAllUrls();
    
    if (result.success) {
      console.log(`✅ Success: ${result.message}`);
      console.log(`📊 Status Code: ${result.status}`);
    } else {
      console.log(`❌ Failed: ${result.message}`);
      if (result.status) {
        console.log(`📊 Status Code: ${result.status}`);
      }
    }
    
  } catch (error) {
    console.log(`💥 Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
  
  console.log('\n📝 Next Steps:');
  console.log('1. Verify URLs in Bing Webmaster Tools');
  console.log('2. Monitor search engine indexing performance');
  console.log('3. Run this script when adding new pages');
  
  console.log('\n🔗 IndexNow Documentation: https://www.indexnow.org/documentation');
  console.log('🔗 API Key File: https://atlanticground.com/86027c0fc29e44699a1f74a581f5362d.txt');
}

if (require.main === module) {
  main().catch(console.error);
}