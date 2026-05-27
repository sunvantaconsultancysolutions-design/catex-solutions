/**
 * PAGE GENERATOR - Creates all service pages for Catex Private Limited
 * Run with: node generate-pages.js
 */
const fs = require('fs');
const path = require('path');

const pages = [
  // ===== START BUSINESS =====
  {
    file: 'private-limited.html',
    title: 'Private Limited Company Registration | Catex Private Limited',
    description: 'Register your Private Limited Company online with Catex Private Limited. Quick, affordable, and completely online registration service.',
    h1: 'Private Limited Company Registration',
    price: '₹6,999',
    tag: 'Most Popular',
    icon: 'fas fa-building',
    tagline: 'Start your business with the most preferred legal structure in India',
    color: '#4F46E5',
    features: ['Name Approval from MCA', 'DSC for 2 Directors', 'DIN for 2 Directors', 'MOA & AOA Drafting', 'PAN & TAN of Company', 'Certificate of Incorporation'],
    faqs: [
      { q: 'What is a Private Limited Company?', a: 'A Private Limited Company is a type of company that limits owner liability to their shares, limits the number of shareholders to 200, and restricts shareholders from publicly trading shares.' },
      { q: 'What is the minimum capital required?', a: 'There is no minimum paid-up capital requirement for a Private Limited Company in India after the Companies Act 2013 amendment.' },
      { q: 'How many directors are required?', a: 'A minimum of 2 directors are required for a Private Limited Company, with a maximum of 15 directors.' },
      { q: 'How long does registration take?', a: 'Typically 10-15 working days from the date of document submission, subject to MCA processing times.' }
    ],
    steps: ['Fill the Form', 'Document Submission', 'MCA Filing', 'Get Certificate']
  },
  {
    file: 'opc.html',
    title: 'One Person Company Registration | Catex Private Limited',
    description: 'Register your One Person Company (OPC) online with Catex Private Limited. Start your solo business with limited liability protection.',
    h1: 'One Person Company Registration',
    price: '₹5,499',
    tag: 'For Solo Entrepreneurs',
    icon: 'fas fa-user-tie',
    tagline: 'Perfect for solo entrepreneurs who want limited liability protection',
    color: '#7C3AED',
    features: ['Name Approval from MCA', 'DSC for 1 Director', 'DIN for 1 Director', 'MOA & AOA Drafting', 'PAN & TAN of Company', 'Certificate of Incorporation'],
    faqs: [
      { q: 'Who can form an OPC?', a: 'Only a natural person who is an Indian citizen and resident in India can form an OPC. NRIs cannot form an OPC.' },
      { q: 'What is the nominee requirement?', a: 'An OPC must have one nominee who will take over in the absence of the sole member.' },
      { q: 'Can an OPC be converted to Pvt. Ltd.?', a: 'Yes, an OPC can be converted to a Private Limited Company voluntarily after 2 years or mandatorily when turnover exceeds ₹2 crore.' },
      { q: 'What are the tax benefits of OPC?', a: 'OPC is taxed at 30% of profits, similar to other companies, but enjoys separate legal entity status and limited liability.' }
    ],
    steps: ['Fill the Form', 'Document Submission', 'MCA Filing', 'Get Certificate']
  },
  {
    file: 'llp.html',
    title: 'LLP Registration | Catex Private Limited',
    description: 'Register your Limited Liability Partnership (LLP) online with Catex Private Limited. Combine partnership flexibility with company liability protection.',
    h1: 'Limited Liability Partnership Registration',
    price: '₹5,999',
    tag: 'Best for Partnerships',
    icon: 'fas fa-handshake',
    tagline: 'Best of both worlds — partnership flexibility with limited liability',
    color: '#06B6D4',
    features: ['Name Approval from MCA', 'DSC for 2 Partners', 'DPIN for 2 Partners', 'LLP Agreement Drafting', 'PAN & TAN of LLP', 'Certificate of Incorporation'],
    faqs: [
      { q: 'What is an LLP?', a: 'An LLP (Limited Liability Partnership) is a hybrid form of business that combines the flexibility of a partnership with the limited liability protection of a company.' },
      { q: 'How many partners are required?', a: 'Minimum 2 partners are required for an LLP. There is no maximum limit on the number of partners.' },
      { q: 'What are the annual compliance requirements?', a: 'LLPs must file Form 11 (Annual Return) and Form 8 (Statement of Accounts) annually with the ROC.' },
      { q: 'What are the advantages of LLP over Partnership?', a: 'LLP has separate legal identity, limited liability protection, no minimum capital requirement, and partners are not liable for each others actions.' }
    ],
    steps: ['Fill the Form', 'Document Submission', 'MCA Filing', 'Get Certificate']
  },
  {
    file: 'startup.html',
    title: 'Startup Incorporation | Catex Private Limited',
    description: 'Incorporate your startup with Catex Private Limited. Get all registrations done for your new business in India.',
    h1: 'Startup Incorporation',
    price: '₹7,999',
    tag: 'Complete Package',
    icon: 'fas fa-rocket',
    tagline: 'Complete startup setup — from incorporation to all registrations',
    color: '#F59E0B',
    features: ['Company Registration', 'Startup India Recognition', 'GST Registration', 'Bank Account Assistance', 'Founder Agreement', 'All MCA Filings'],
    faqs: [
      { q: 'What is Startup India?', a: 'Startup India is a Government of India initiative that provides various benefits, tax exemptions, and support to eligible startups.' },
      { q: 'What are the eligibility criteria?', a: 'A startup must be incorporated for less than 10 years, have annual turnover not exceeding ₹100 crore, and must be working towards innovation.' },
      { q: 'What are the tax benefits?', a: 'Recognized startups can avail tax exemption for 3 years under Section 80-IAC, and capital gains tax exemption under Section 54EE.' }
    ],
    steps: ['Fill the Form', 'Company Registration', 'Startup India Recognition', 'Complete Setup']
  },
  {
    file: 'public-limited.html',
    title: 'Public Limited Company Registration | Catex Private Limited',
    description: 'Register your Public Limited Company with Catex Private Limited. Ideal for businesses planning to raise funds from the public.',
    h1: 'Public Limited Company Registration',
    price: '₹14,999',
    tag: 'For Large Businesses',
    icon: 'fas fa-city',
    tagline: 'Ideal for businesses planning public shareholding or IPO',
    color: '#10B981',
    features: ['Name Approval from MCA', 'DSC for 3 Directors', 'DIN for 3 Directors', 'MOA & AOA Drafting', 'PAN & TAN of Company', 'Certificate of Incorporation'],
    faqs: [
      { q: 'What is a Public Limited Company?', a: 'A Public Limited Company can offer its shares to the general public and is listed on stock exchanges. It requires a minimum of 3 directors and 7 shareholders.' },
      { q: 'What is the minimum paid-up capital?', a: 'A Public Limited Company requires a minimum paid-up capital of ₹5 lakhs.' },
      { q: 'Can a Public Limited Company do an IPO?', a: 'Yes, a Public Limited Company can go for an IPO to raise capital from the general public through stock exchanges.' }
    ],
    steps: ['Fill the Form', 'Document Submission', 'MCA Filing', 'Get Certificate']
  },
  {
    file: 'ngo.html',
    title: 'NGO / Section 8 Company Registration | Catex Private Limited',
    description: 'Register your NGO or Section 8 Company with Catex Private Limited. Start your non-profit organization legally in India.',
    h1: 'NGO / Section 8 Company Registration',
    price: '₹8,999',
    tag: 'For Non-Profits',
    icon: 'fas fa-heart',
    tagline: 'Legal structure for non-profit organizations working for social good',
    color: '#EF4444',
    features: ['Name Approval from MCA', 'DSC & DIN', 'MOA & AOA Drafting', 'Section 8 License', 'PAN & TAN', 'Certificate of Incorporation'],
    faqs: [
      { q: 'What is a Section 8 Company?', a: 'A Section 8 Company (formerly Section 25 Company) is a non-profit company that promotes charitable objects like commerce, art, science, sports, education, research, etc.' },
      { q: 'What are the tax benefits?', a: 'Section 8 Companies can apply for 80G and 12A registration to get tax exemptions and offer tax benefits to donors.' },
      { q: 'Can Section 8 companies pay salaries?', a: 'Yes, Section 8 companies can pay salaries to employees including directors for services rendered to the company.' }
    ],
    steps: ['Fill the Form', 'Document Submission', 'MCA Filing', 'Get License & Certificate']
  },
  {
    file: 'company-name-search.html',
    title: 'Company Name Search | Catex Private Limited',
    description: 'Search for available company names before registration. Check name availability for your new company or LLP.',
    h1: 'Company Name Search',
    price: '₹999',
    tag: 'Quick Service',
    icon: 'fas fa-search',
    tagline: 'Find the perfect available name for your company before registration',
    color: '#8B5CF6',
    features: ['Trademark Database Check', 'MCA Database Check', 'Name Availability Report', 'Alternative Name Suggestions', 'Objection Risk Assessment', 'Quick 24-Hour Report'],
    faqs: [
      { q: 'Why is company name search important?', a: 'Choosing the right name is crucial. MCA rejects names similar to existing companies or trademarks. A proper search prevents rejection and saves time.' },
      { q: 'What makes a name unacceptable?', a: 'Names that are identical/similar to existing companies, contain prohibited words, are too generic, or infringe on trademarks are rejected.' }
    ],
    steps: ['Fill the Form', 'Provide Preferred Names', 'Database Search', 'Get Report']
  },
  {
    file: 'startup-india.html',
    title: 'Startup India Registration | Catex Private Limited',
    description: 'Get Startup India recognition and avail government benefits, tax exemptions, and funding opportunities.',
    h1: 'Startup India Recognition',
    price: '₹3,999',
    tag: 'Government Scheme',
    icon: 'fas fa-flag',
    tagline: 'Get government recognition and unlock tax benefits for your startup',
    color: '#F97316',
    features: ['DPIIT Recognition', 'Tax Exemption under 80-IAC', '3-Year Tax Holiday', 'Self-Certification Compliance', 'IPR Benefits', 'Funding Access'],
    faqs: [
      { q: 'What is Startup India Recognition?', a: 'DPIIT Recognition (formerly DIPP) allows startups to access various benefits including tax exemptions, easier compliance, and government funding programs.' },
      { q: 'How long does recognition last?', a: 'Startup India recognition is valid for 10 years from the date of incorporation or until the turnover exceeds ₹100 crore.' }
    ],
    steps: ['Fill the Form', 'Eligibility Check', 'DPIIT Application', 'Get Recognition']
  },

  // ===== PROTECT BUSINESS =====
  {
    file: 'trademark.html',
    title: 'Trademark Registration | Catex Private Limited',
    description: 'Register your trademark online with Catex Private Limited. Protect your brand name, logo, and identity legally in India.',
    h1: 'Trademark Registration',
    price: '₹5,499',
    tag: 'Protect Your Brand',
    icon: 'fas fa-trademark',
    tagline: 'Protect your brand name, logo, and identity legally across India',
    color: '#4F46E5',
    features: ['Trademark Search', 'Application Filing', 'Acknowledgement Copy', 'Status Tracking', 'Objection Handling (if any)', 'TM Certificate on Grant'],
    faqs: [
      { q: 'What can be registered as a trademark?', a: 'Words, names, logos, slogans, sounds, colours, shapes, or any combination that distinguishes your goods/services can be registered as a trademark.' },
      { q: 'How long is a trademark valid?', a: 'A trademark registration is valid for 10 years from the date of filing and can be renewed indefinitely for further 10-year periods.' },
      { q: 'How long does trademark registration take?', a: 'The complete process takes 18-24 months. However, you get TM status (TM symbol rights) immediately after filing.' }
    ],
    steps: ['Fill the Form', 'Trademark Search', 'Application Filing', 'Get TM Certificate']
  },
  {
    file: 'trademark-objection.html',
    title: 'Reply to Trademark Objection | Catex Private Limited',
    description: 'Got a trademark objection? Our experts will draft and file a strong reply to save your trademark application.',
    h1: 'Reply to Trademark Objection',
    price: '₹3,999',
    tag: 'Expert Reply',
    icon: 'fas fa-reply',
    tagline: 'Got an objection? Our experts will draft a strong, winning reply',
    color: '#DC2626',
    features: ['Objection Analysis', 'Strong Counter-Arguments', 'Legal Drafting', 'Evidence Compilation', 'Timely Filing', 'Hearing Representation'],
    faqs: [
      { q: 'What is a trademark objection?', a: 'After filing, the Trademark Registry examines your application and may raise objections. You need to reply within 30 days of receiving the examination report.' },
      { q: 'What are common objection reasons?', a: 'Common reasons include: similarity with existing marks, descriptive nature of the mark, deceptive nature, or lacking distinctive character.' },
      { q: 'What happens if I don\'t reply?', a: 'If you fail to reply within 30 days, your application will be deemed abandoned and the trademark will not be registered.' }
    ],
    steps: ['Fill the Form', 'Objection Analysis', 'Draft Reply', 'File & Track']
  },
  {
    file: 'trademark-renewal.html',
    title: 'Trademark Renewal | Catex Private Limited',
    description: 'Renew your trademark registration online with Catex Private Limited. Keep your brand protected for the next 10 years.',
    h1: 'Trademark Renewal',
    price: '₹4,499',
    tag: 'Keep Protection Active',
    icon: 'fas fa-sync',
    tagline: 'Keep your brand protected — renew before expiry to avoid losing your trademark',
    color: '#059669',
    features: ['Due Date Check', 'Renewal Application', 'Government Fee Payment', 'Status Tracking', 'Renewed Certificate', 'Reminder System'],
    faqs: [
      { q: 'When should I renew my trademark?', a: 'Trademark registration is valid for 10 years. You should apply for renewal within 6 months before the expiry date to avoid surcharge.' },
      { q: 'What happens if I miss the renewal?', a: 'There is a grace period of 6 months after expiry with a surcharge. After that, the trademark gets removed from the register.' },
      { q: 'Can I renew a lapsed trademark?', a: 'Yes, within 6 months of expiry with surcharge. After that, you need to re-apply for registration.' }
    ],
    steps: ['Fill the Form', 'Check Expiry Date', 'File Renewal', 'Get Renewed Certificate']
  },
  {
    file: 'trademark-licensing.html',
    title: 'Trademark Licensing | Catex Private Limited',
    description: 'License your trademark to others legally. Register trademark license agreements with Catex Private Limited.',
    h1: 'Trademark Licensing',
    price: '₹6,999',
    tag: 'Monetize Your Brand',
    icon: 'fas fa-file-contract',
    tagline: 'Allow others to legally use your trademark while retaining ownership',
    color: '#7C3AED',
    features: ['License Agreement Drafting', 'Registered User Application', 'Quality Control Clauses', 'Royalty Structure', 'Territory Definition', 'Duration Setting'],
    faqs: [
      { q: 'What is trademark licensing?', a: 'Trademark licensing allows the trademark owner to grant permission to another party (licensee) to use the trademark under specific terms and conditions.' },
      { q: 'What is a Registered User Agreement?', a: 'A Registered User Agreement is a formal agreement filed with the Trademark Registry that legally authorizes another entity to use your trademark.' }
    ],
    steps: ['Fill the Form', 'Discuss Terms', 'Draft Agreement', 'Register with Registry']
  },
  {
    file: 'trademark-search.html',
    title: 'Trademark Search | Catex Private Limited',
    description: 'Search for trademark availability before applying. Comprehensive trademark database search across all classes.',
    h1: 'Trademark Search',
    price: '₹999',
    tag: 'Before You Apply',
    icon: 'fas fa-search',
    tagline: 'Search before you apply — avoid rejection and save time & money',
    color: '#0EA5E9',
    features: ['Identical Mark Search', 'Similar Mark Search', 'Class-wise Search', 'Proprietor Search', 'Risk Assessment Report', 'Application Strategy'],
    faqs: [
      { q: 'Why do I need a trademark search?', a: 'A trademark search helps identify potential conflicts with existing marks, reducing the risk of rejection or future legal disputes.' },
      { q: 'What databases are searched?', a: 'We search the Indian Trademark Registry database, business name databases, and common law databases for comprehensive coverage.' }
    ],
    steps: ['Fill the Form', 'Provide Brand Details', 'Comprehensive Search', 'Get Report']
  },
  {
    file: 'trademark-assignment.html',
    title: 'Trademark Assignment | Catex Private Limited',
    description: 'Sell or transfer your trademark legally with Catex Private Limited. Complete trademark assignment documentation and registration.',
    h1: 'Trademark Assignment (Sell Your Trademark)',
    price: '₹8,999',
    tag: 'Transfer Ownership',
    icon: 'fas fa-exchange-alt',
    tagline: 'Legally transfer trademark ownership with proper documentation and registration',
    color: '#D97706',
    features: ['Assignment Agreement Drafting', 'TM-P Form Filing', 'Goodwill Assessment', 'Consideration Structure', 'Registry Recording', 'Certificate of Transfer'],
    faqs: [
      { q: 'What is trademark assignment?', a: 'Trademark assignment is the transfer of ownership of a trademark from one party (assignor) to another (assignee), with or without the associated business.' },
      { q: 'Can I sell part of my trademark rights?', a: 'Yes, partial assignment is possible where you can assign trademark rights for specific goods/services or specific territories.' }
    ],
    steps: ['Fill the Form', 'Negotiate Terms', 'Draft Assignment Deed', 'File with Registry']
  },
  {
    file: 'copyright.html',
    title: 'Copyright Registration | Catex Private Limited',
    description: 'Register your copyright online with Catex Private Limited. Protect your creative works — music, art, software, books, films.',
    h1: 'Copyright Registration',
    price: '₹3,999',
    tag: 'Protect Your Work',
    icon: 'fas fa-copyright',
    tagline: 'Legally protect your creative works — books, music, software, art, and more',
    color: '#6366F1',
    features: ['Application Preparation', 'Government Fee Payment', 'Unique Diary Number', 'Status Tracking', 'Copyright Certificate', 'Works for Multiple Types'],
    faqs: [
      { q: 'What can be copyrighted?', a: 'Literary works (books, code), artistic works (paintings, photos), musical works, dramatic works, films, and sound recordings can be copyrighted.' },
      { q: 'Is copyright registration mandatory?', a: 'No, copyright exists automatically upon creation. However, registration provides legal evidence of ownership and makes enforcement easier.' },
      { q: 'How long does copyright protection last?', a: 'In India, copyright in original works lasts for the lifetime of the author plus 60 years after their death.' }
    ],
    steps: ['Fill the Form', 'Work Details', 'Application Filing', 'Get Certificate']
  },
  {
    file: 'copyright-objection.html',
    title: 'Reply to Copyright Objection | Catex Private Limited',
    description: 'Got a copyright objection? Our experts will draft and file a strong reply to save your copyright application.',
    h1: 'Reply to Copyright Objection',
    price: '₹2,999',
    tag: 'Expert Reply',
    icon: 'fas fa-reply',
    tagline: 'Received a copyright objection? Let our experts handle the reply',
    color: '#DC2626',
    features: ['Objection Analysis', 'Strong Reply Drafting', 'Evidence Compilation', 'Filing within Deadline', 'Hearing Support', 'Status Tracking'],
    faqs: [
      { q: 'What is a copyright objection?', a: 'The Copyright Office may raise objections to your application citing reasons like similarity with existing works, incomplete information, or procedural issues.' },
      { q: 'What is the timeline to reply?', a: 'You typically have 30 days to file a response to the objection notice. Failure to respond results in abandonment of the application.' }
    ],
    steps: ['Fill the Form', 'Objection Analysis', 'Draft Reply', 'File Response']
  },

  // ===== MANAGE BUSINESS =====
  {
    file: 'roc-compliance.html',
    title: 'Pvt. Ltd. ROC Compliance AMC | Catex Private Limited',
    description: 'Annual compliance management for Private Limited Companies. Never miss an ROC deadline with Catex Private Limited.',
    h1: 'Pvt. Ltd. ROC Compliance AMC',
    price: '₹1,499',
    tag: 'Annual Compliance',
    icon: 'fas fa-file-alt',
    tagline: 'Complete annual compliance management for your Private Limited Company',
    color: '#4F46E5',
    features: ['Annual Return Filing (MGT-7)', 'Financial Statement Filing (AOC-4)', 'Board Meetings & Minutes', 'DIR-3 KYC for Directors', 'DPT-3 Filing', 'Dedicated Legal Manager'],
    faqs: [
      { q: 'What compliance does a Pvt. Ltd. need annually?', a: 'A Private Limited Company must file Annual Returns (MGT-7), Financial Statements (AOC-4), conduct Board Meetings, maintain statutory registers, and more.' },
      { q: 'What is the penalty for non-compliance?', a: 'Penalty of ₹200 per day per form for delay, plus prosecution of directors. Company may be struck off if persistent default occurs.' }
    ],
    steps: ['Fill the Form', 'Consultant Call', 'Document Collection', 'Filing & Compliance']
  },
  {
    file: 'opc-roc.html',
    title: 'OPC ROC Compliance AMC | Catex Private Limited',
    description: 'Annual compliance management for One Person Companies. Expert ROC filing services at affordable prices.',
    h1: 'OPC ROC Compliance AMC',
    price: '₹1,199',
    tag: 'OPC Compliance',
    icon: 'fas fa-file-contract',
    tagline: 'Hassle-free annual compliance management for your One Person Company',
    color: '#7C3AED',
    features: ['Annual Return Filing', 'Financial Statement Filing', 'Board Resolution Drafting', 'DIR-3 KYC', 'MCA Filings', 'Dedicated Legal Manager'],
    faqs: [
      { q: 'What are the compliance requirements for OPC?', a: 'OPC must file Annual Returns (MGT-7A), Financial Statements (AOC-4), hold Board Meetings, and maintain statutory registers.' },
      { q: 'Is AGM mandatory for OPC?', a: 'No, Annual General Meeting (AGM) is not mandatory for OPC. However, board meetings must be held.' }
    ],
    steps: ['Fill the Form', 'Consultant Call', 'Document Collection', 'Filing & Compliance']
  },
  {
    file: 'dir3.html',
    title: 'DIR3 DIN KYC Filing | Catex Private Limited',
    description: 'File DIR-3 KYC for your DIN online. Annual KYC filing for all Directors holding a DIN in India.',
    h1: 'DIR-3 DIN KYC Filing',
    price: '₹999',
    tag: 'Annual KYC',
    icon: 'fas fa-id-card',
    tagline: 'Mandatory annual KYC for every Director holding a DIN in India',
    color: '#0EA5E9',
    features: ['DIR-3 KYC Web Filing', 'OTP Authentication', 'Digital Signature', 'Confirmation Receipt', 'Due Date Monitoring', 'Quick 1-Day Filing'],
    faqs: [
      { q: 'Who needs to file DIR-3 KYC?', a: 'Every individual who has been allotted a DIN (Director Identification Number) must file DIR-3 KYC annually, regardless of whether they are currently a director.' },
      { q: 'What is the penalty for not filing?', a: 'DIN gets deactivated if DIR-3 KYC is not filed by 30th September each year, and a penalty of ₹5,000 is levied to reactivate it.' },
      { q: 'When is the due date?', a: 'DIR-3 KYC must be filed by 30th September of every financial year.' }
    ],
    steps: ['Fill the Form', 'Provide DIN Details', 'File DIR-3 KYC', 'Get Confirmation']
  },
  {
    file: 'roc-filing-pvt.html',
    title: 'ROC Return Filing for Pvt. Ltd. | Catex Private Limited',
    description: 'File annual ROC returns for your Private Limited Company. Expert assistance for MGT-7 and AOC-4 filing.',
    h1: 'ROC Return Filing for Pvt. Ltd.',
    price: '₹3,999',
    tag: 'Annual Filing',
    icon: 'fas fa-folder-open',
    tagline: 'Timely filing of Annual Returns and Financial Statements for your company',
    color: '#059669',
    features: ['MGT-7 Annual Return Filing', 'AOC-4 Financial Statement Filing', 'Balance Sheet Preparation', 'P&L Statement', 'Digital Signature', 'MCA Filing Receipt'],
    faqs: [
      { q: 'What forms need to be filed annually?', a: 'Private Limited Companies must file MGT-7 (Annual Return) within 60 days of AGM, and AOC-4 (Financial Statements) within 30 days of AGM.' },
      { q: 'When is the AGM to be held?', a: 'The Annual General Meeting (AGM) must be held within 6 months from the end of the financial year, i.e., by 30th September.' }
    ],
    steps: ['Fill the Form', 'Document Submission', 'Financial Preparation', 'MCA Filing']
  },
  {
    file: 'roc-filing-opc.html',
    title: 'ROC Return Filing for OPC | Catex Private Limited',
    description: 'File annual ROC returns for your One Person Company. Expert assistance for MGT-7A and AOC-4 filing.',
    h1: 'ROC Return Filing for OPC',
    price: '₹2,999',
    tag: 'Annual Filing',
    icon: 'fas fa-folder',
    tagline: 'Complete annual ROC filing for your One Person Company',
    color: '#D97706',
    features: ['MGT-7A Annual Return Filing', 'AOC-4 Financial Statement', 'Balance Sheet', 'P&L Statement', 'Digital Signature', 'MCA Acknowledgement'],
    faqs: [
      { q: 'What is the due date for OPC annual filing?', a: 'OPC must file MGT-7A within 60 days of the end of the financial year (by 29th May), and AOC-4 within 180 days of the financial year end.' }
    ],
    steps: ['Fill the Form', 'Document Submission', 'Financial Preparation', 'MCA Filing']
  },
  {
    file: 'roc-filing-llp.html',
    title: 'ROC Return Filing for LLP | Catex Private Limited',
    description: 'File annual ROC returns for your LLP. Expert assistance for Form 11 and Form 8 filing with the ROC.',
    h1: 'ROC Return Filing for LLP',
    price: '₹2,499',
    tag: 'Annual Filing',
    icon: 'fas fa-folder-open',
    tagline: 'Expert Form 11 and Form 8 filing for your LLP',
    color: '#06B6D4',
    features: ['Form 11 Annual Return', 'Form 8 Accounts & Solvency', 'Digital Signature', 'MCA Portal Filing', 'Filing Acknowledgement', 'Penalty Avoidance'],
    faqs: [
      { q: 'What forms does an LLP need to file?', a: 'LLPs must file Form 11 (Annual Return) within 60 days from FY end, and Form 8 (Statement of Accounts & Solvency) within 30 days from 6 months of FY end.' }
    ],
    steps: ['Fill the Form', 'Document Submission', 'Prepare Accounts', 'File with ROC']
  },
  {
    file: 'director.html',
    title: 'Appointment of Director | Catex Private Limited',
    description: 'Appoint a new director in your company online with Catex Private Limited. Complete MCA filing and documentation.',
    h1: 'Appointment of Director',
    price: '₹3,999',
    tag: 'Board Changes',
    icon: 'fas fa-user-plus',
    tagline: 'Legally appoint new directors with complete MCA filing and documentation',
    color: '#4F46E5',
    features: ['DIR-2 Consent Letter', 'Board Resolution', 'Form DIR-12 Filing', 'DIN Allotment (if needed)', 'Update of Registers', 'MCA Confirmation'],
    faqs: [
      { q: 'What are the requirements to appoint a director?', a: 'The person must have a valid DIN, must not be disqualified under the Companies Act, and must give consent in Form DIR-2 before the appointment.' },
      { q: 'How many directors can a company have?', a: 'A Private Limited Company can have minimum 2 and maximum 15 directors. A Public Limited Company can have minimum 3 directors.' }
    ],
    steps: ['Fill the Form', 'Board Resolution', 'DIR-12 Filing', 'MCA Confirmation']
  },
  {
    file: 'director-resignation.html',
    title: 'Resignation of Director | Catex Private Limited',
    description: 'Process director resignation from your company with complete MCA filing. Legal compliance for board changes.',
    h1: 'Resignation of Director',
    price: '₹2,999',
    tag: 'Board Changes',
    icon: 'fas fa-user-minus',
    tagline: 'Process director resignation legally with proper documentation and MCA filing',
    color: '#EF4444',
    features: ['Resignation Letter Drafting', 'Board Resolution', 'Form DIR-11 Filing', 'Form DIR-12 Filing', 'Register Updates', 'MCA Confirmation'],
    faqs: [
      { q: 'How does a director resign?', a: 'A director must serve a written notice of resignation to the company. The company must file Form DIR-12 within 30 days, and the director can file DIR-11.' },
      { q: 'When is director resignation effective?', a: 'Resignation is effective from the date of filing DIR-11 with MCA, or the date of notice, whichever is later.' }
    ],
    steps: ['Fill the Form', 'Resignation Notice', 'Board Resolution', 'File DIR-12']
  },
  {
    file: 'transfer-shares.html',
    title: 'Transfer of Shares | Catex Private Limited',
    description: 'Transfer shares of your Private Limited Company legally with proper documentation and MCA filing.',
    h1: 'Transfer of Shares',
    price: '₹3,999',
    tag: 'Share Transfer',
    icon: 'fas fa-exchange-alt',
    tagline: 'Legal share transfer with proper documentation and stamp duty compliance',
    color: '#8B5CF6',
    features: ['Share Transfer Form (SH-4)', 'Board Resolution', 'Stamp Duty Calculation', 'Register of Members Update', 'Share Certificate Issue', 'MCA Filing'],
    faqs: [
      { q: 'What is the procedure for share transfer?', a: 'Share transfer requires: execution of SH-4 form, payment of stamp duty, board approval, update of register of members, and issue of new share certificate.' },
      { q: 'What stamp duty is applicable?', a: 'Stamp duty on share transfer is 0.25% of the value of shares transferred (consideration amount).' }
    ],
    steps: ['Fill the Form', 'SH-4 Execution', 'Board Approval', 'Issue New Certificate']
  },
  {
    file: 'increase-capital.html',
    title: 'Increase Capital of Company | Catex Private Limited',
    description: 'Increase the authorized or paid-up capital of your company with proper MCA filing and compliance.',
    h1: 'Increasing Capital of Company',
    price: '₹4,999',
    tag: 'Capital Changes',
    icon: 'fas fa-chart-line',
    tagline: 'Legally increase your company\'s authorized and paid-up share capital',
    color: '#10B981',
    features: ['Board Resolution', 'EGM Notice & Minutes', 'MOA Alteration (SH-7)', 'PAS-3 Filing', 'ROC Filing', 'Updated Share Certificates'],
    faqs: [
      { q: 'What is the difference between authorized and paid-up capital?', a: 'Authorized capital is the maximum amount a company can raise through shares. Paid-up capital is the amount actually received from shareholders.' },
      { q: 'Can I increase capital without shareholder approval?', a: 'No. Increasing authorized capital requires shareholder approval via Special Resolution at an EGM or through postal ballot.' }
    ],
    steps: ['Fill the Form', 'Board Resolution', 'Shareholders Meeting', 'SH-7 Filing']
  },
  {
    file: 'closure.html',
    title: 'Closure of Company | Catex Private Limited',
    description: 'Close your Private Limited Company legally with Catex Private Limited. Complete strike-off process and MCA filing.',
    h1: 'Closure of Company',
    price: '₹9,999',
    tag: 'Winding Up',
    icon: 'fas fa-times-circle',
    tagline: 'Legal closure of your company through the fast-track strike-off route',
    color: '#DC2626',
    features: ['STK-2 Filing', 'Board Resolution', 'NOC from Creditors', 'Bank Account Closure', 'Tax Clearance', 'Gazette Publication'],
    faqs: [
      { q: 'What are the ways to close a company?', a: 'A company can be closed through: Fast Track Exit (STK-2) for dormant companies, or through the National Company Law Tribunal (NCLT) for active companies.' },
      { q: 'What are the requirements for fast-track closure?', a: 'Company must have no assets/liabilities, must not have been operational for 2 years, and must file STK-2 with consent of majority directors.' }
    ],
    steps: ['Fill the Form', 'Eligibility Check', 'NOCs & Clearances', 'STK-2 Filing']
  },
  {
    file: 'closure-opc.html',
    title: 'Closure of OPC | Catex Private Limited',
    description: 'Close your One Person Company legally with Catex Private Limited. Complete strike-off and MCA filing.',
    h1: 'Closure of OPC',
    price: '₹7,999',
    tag: 'Winding Up',
    icon: 'fas fa-times-circle',
    tagline: 'Legal closure of your One Person Company through proper MCA process',
    color: '#B45309',
    features: ['STK-2 Filing', 'Board Resolution', 'Bank Account Closure', 'Pending Dues Clearance', 'ROC Intimation', 'Strike-Off Certificate'],
    faqs: [
      { q: 'Can I close my OPC if it has never operated?', a: 'Yes, a dormant OPC that has not commenced business or has not been in operation can be closed through the fast-track strike-off route.' }
    ],
    steps: ['Fill the Form', 'Eligibility Check', 'Clearances', 'STK-2 Filing']
  },
  {
    file: 'closure-llp.html',
    title: 'Closure of LLP | Catex Private Limited',
    description: 'Close your LLP legally with Catex Private Limited. Complete Form 24 filing and strike-off process.',
    h1: 'Closure of LLP',
    price: '₹7,999',
    tag: 'Winding Up',
    icon: 'fas fa-times-circle',
    tagline: 'Legal closure of your LLP through the proper MCA strike-off process',
    color: '#6B7280',
    features: ['Form 24 Filing', 'Partners Consent', 'Bank Account Closure', 'Tax Clearance', 'Creditor NOC', 'Strike-Off Confirmation'],
    faqs: [
      { q: 'How to close an LLP?', a: 'An LLP with no assets/liabilities can be struck off by filing Form 24 with consent of all designated partners. Active LLPs need voluntary winding up.' },
      { q: 'What happens if LLP has pending returns?', a: 'All pending annual returns (Form 11 & Form 8) must be filed before applying for closure.' }
    ],
    steps: ['Fill the Form', 'Pending Compliance', 'Form 24 Filing', 'Strike-Off Confirmation']
  },

  // ===== GROW BUSINESS =====
  {
    file: 'iso.html',
    title: 'ISO Certification | Catex Private Limited',
    description: 'Get ISO certification for your business with Catex Private Limited. ISO 9001, 14001, 27001 and more.',
    h1: 'ISO Certification',
    price: '₹9,999',
    tag: 'Quality Standard',
    icon: 'fas fa-certificate',
    tagline: 'Boost credibility and win more contracts with ISO certification',
    color: '#0369A1',
    features: ['ISO 9001:2015 (Quality)', 'ISO 14001 (Environment)', 'ISO 27001 (Information Security)', 'ISO 45001 (Occupational Health)', 'Gap Analysis', 'Certificate from Accredited Body'],
    faqs: [
      { q: 'What is ISO certification?', a: 'ISO (International Organization for Standardization) certification demonstrates that your business meets international standards for quality, safety, and efficiency.' },
      { q: 'Which ISO certification should I get?', a: 'ISO 9001 (Quality Management) is most common. ISO 27001 is for IT companies. ISO 14001 is for environmental management. We help you choose the right one.' },
      { q: 'How long is ISO certification valid?', a: 'ISO certification is valid for 3 years with annual surveillance audits required.' }
    ],
    steps: ['Fill the Form', 'Gap Analysis', 'Documentation', 'Audit & Certification']
  },
  {
    file: 'gst.html',
    title: 'GST Registration | Catex Private Limited',
    description: 'Register for GST online with Catex Private Limited. Mandatory for businesses with turnover above the threshold.',
    h1: 'GST Registration',
    price: '₹999',
    tag: 'Mandatory Tax',
    icon: 'fas fa-receipt',
    tagline: 'Get GST registered and start collecting tax legally from your customers',
    color: '#15803D',
    features: ['GST Application Filing', 'GSTIN Allotment', 'ARN Number', 'GST Certificate', 'GSTIN for Multiple States', 'Amendment Services'],
    faqs: [
      { q: 'Who needs GST registration?', a: 'Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for services) must register for GST. Some businesses must register regardless of turnover.' },
      { q: 'How long does GST registration take?', a: 'GST registration typically takes 3-7 working days after document submission. You receive a provisional GSTIN immediately.' },
      { q: 'What documents are required?', a: 'PAN card, Aadhaar, bank statement, business registration proof, address proof, and photos are required for GST registration.' }
    ],
    steps: ['Fill the Form', 'Document Upload', 'Application Filing', 'Get GSTIN']
  },
  {
    file: 'msme.html',
    title: 'MSME / Udyam Registration | Catex Private Limited',
    description: 'Register your business as an MSME under the Udyam portal. Get government benefits, subsidies, and priority lending.',
    h1: 'MSME / Udyam Registration',
    price: '₹999',
    tag: 'Government Scheme',
    icon: 'fas fa-industry',
    tagline: 'Unlock government benefits, subsidies, and credit schemes for your MSME',
    color: '#B45309',
    features: ['Udyam Registration', 'Udyam Certificate', 'Priority Sector Lending', 'Government Tender Benefits', 'Collateral-Free Loans', 'Subsidy Benefits'],
    faqs: [
      { q: 'Who is eligible for Udyam Registration?', a: 'Micro, Small, and Medium Enterprises (MSME) as per the revised classification: Micro (investment ≤₹1 Cr, turnover ≤₹5 Cr), Small (≤₹10 Cr, ≤₹50 Cr), Medium (≤₹50 Cr, ≤₹250 Cr).' },
      { q: 'What are the benefits of Udyam Registration?', a: 'Priority lending, government subsidies, protection against delayed payments, preference in government tenders, concession in electricity bills, and more.' },
      { q: 'Is Udyam Registration mandatory?', a: 'While not mandatory, Udyam Registration is highly beneficial for accessing government schemes and credit at preferential rates.' }
    ],
    steps: ['Fill the Form', 'Verify Aadhaar', 'Business Details', 'Get Udyam Certificate']
  },

  // ===== ABOUT/INFO PAGES =====
  {
    file: 'about.html',
    title: 'About Us | Catex Private Limited',
    description: 'Learn about Catex Private Limited — India\'s trusted business compliance and legal services platform.',
    h1: 'About Catex Private Limited',
    price: null,
    tag: 'Our Story',
    icon: 'fas fa-building',
    tagline: 'Helping entrepreneurs focus on their dreams while we handle the legalities',
    color: '#4F46E5',
    features: ['180,000+ Businesses Served', '16+ Years of Experience', '3,000+ Monthly Clients', '100+ Expert Team Members', '20,752+ Five Star Reviews', 'All-India Coverage'],
    faqs: [],
    steps: []
  },
  {
    file: 'reviews.html',
    title: 'Client Reviews | Catex Private Limited',
    description: 'Read what our 180,000+ satisfied clients say about Catex Private Limited\'s legal and compliance services.',
    h1: 'Client Reviews & Testimonials',
    price: null,
    tag: 'Trusted by 180,000+',
    icon: 'fas fa-star',
    tagline: '20,752+ Five Star Google Reviews from satisfied clients across India',
    color: '#F59E0B',
    features: [],
    faqs: [],
    steps: []
  },
  {
    file: 'disclaimer.html',
    title: 'Disclaimer | Catex Private Limited',
    description: 'Read the disclaimer for Catex Private Limited\'s legal and compliance services.',
    h1: 'Disclaimer',
    price: null,
    tag: 'Legal Notice',
    icon: 'fas fa-exclamation-triangle',
    tagline: 'Please read this disclaimer carefully before using our services',
    color: '#DC2626',
    features: [],
    faqs: [],
    steps: []
  },
  {
    file: 'privacy-policy.html',
    title: 'Privacy Policy | Catex Private Limited',
    description: 'Read Catex Private Limited\'s privacy policy — how we collect, use, and protect your personal data.',
    h1: 'Privacy Policy',
    price: null,
    tag: 'Legal Document',
    icon: 'fas fa-shield-alt',
    tagline: 'How we collect, use, and protect your personal information',
    color: '#4F46E5',
    features: [],
    faqs: [],
    steps: []
  },
  {
    file: 'terms.html',
    title: 'Terms of Use | Catex Private Limited',
    description: 'Read the terms and conditions for using Catex Private Limited\'s services and website.',
    h1: 'Terms of Use',
    price: null,
    tag: 'Legal Document',
    icon: 'fas fa-file-contract',
    tagline: 'Terms and conditions governing the use of our services',
    color: '#374151',
    features: [],
    faqs: [],
    steps: []
  },
  {
    file: 'refund.html',
    title: 'Refund Policy | Catex Private Limited',
    description: 'Read Catex Private Limited\'s refund and cancellation policy for all services.',
    h1: 'Refund Policy',
    price: null,
    tag: 'Policy',
    icon: 'fas fa-undo',
    tagline: 'Our transparent refund and cancellation terms',
    color: '#059669',
    features: [],
    faqs: [],
    steps: []
  },
  {
    file: 'careers.html',
    title: 'Careers | Catex Private Limited',
    description: 'Join the Catex Private Limited team. We\'re hiring legal experts, CS professionals, and tech talent across India.',
    h1: 'Careers at Catex Private Limited',
    price: null,
    tag: 'Join Our Team',
    icon: 'fas fa-users',
    tagline: 'Build your career with India\'s fastest-growing legal tech company',
    color: '#7C3AED',
    features: [],
    faqs: [],
    steps: []
  }
];

function generatePage(p) {
  const serviceContent = p.features.length > 0 ? `
    <section style="padding: 60px 0; background: var(--gray-50);">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px;">
          ${p.features.map(f => `
            <div style="background:white; border-radius:12px; padding:20px; border:1px solid var(--gray-200); display:flex; align-items:center; gap:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
              <div style="width:36px;height:36px;background:rgba(79,70,229,0.1);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas fa-check" style="color:var(--primary);"></i>
              </div>
              <span style="font-size:14px;font-weight:500;color:var(--gray-700);">${f}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>` : '';

  const stepsContent = p.steps.length > 0 ? `
    <section style="padding:60px 0; background:white;">
      <div class="container">
        <div style="text-align:center;margin-bottom:40px;">
          <span class="section-tag">Simple Process</span>
          <h2 class="section-title" style="margin-top:12px;">How It Works</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:24px;">
          ${p.steps.map((s, i) => `
            <div style="background:var(--gray-50);border-radius:16px;padding:32px 24px;text-align:center;border:1px solid var(--gray-200);position:relative;">
              <div style="font-family:Outfit,sans-serif;font-size:3rem;font-weight:900;color:rgba(79,70,229,0.07);position:absolute;top:12px;right:16px;">${String(i+1).padStart(2,'0')}</div>
              <div style="width:60px;height:60px;background:linear-gradient(135deg,rgba(79,70,229,0.1),rgba(6,182,212,0.1));border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;color:var(--primary);margin:0 auto 16px;">
                <i class="fas ${['fa-file-alt','fa-phone-alt','fa-folder-open','fa-check-circle'][i] || 'fa-check-circle'}"></i>
              </div>
              <h3 style="font-size:1rem;color:var(--dark);">${s}</h3>
            </div>
          `).join('')}
        </div>
      </div>
    </section>` : '';

  const faqContent = p.faqs.length > 0 ? `
    <section style="padding:60px 0;background:var(--gray-50);">
      <div class="container">
        <div style="text-align:center;margin-bottom:40px;">
          <span class="section-tag">FAQ</span>
          <h2 class="section-title" style="margin-top:12px;">Frequently Asked Questions</h2>
        </div>
        <div style="max-width:800px;margin:0 auto;">
          ${p.faqs.map((f, i) => `
            <div class="faq-item ${i===0?'active':''}">
              <div class="faq-question" onclick="toggleFAQ(this)">
                <span>${i+1}. ${f.q}</span>
                <i class="fas fa-plus faq-icon"></i>
              </div>
              <div class="faq-answer"><p>${f.a}</p></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${p.title}</title>
  <meta name="description" content="${p.description}"/>
  <meta name="robots" content="index, follow"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <link rel="stylesheet" href="style.css"/>
  <style>
    body { padding-top: 72px; }
    .page-hero {
      background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #0F172A 100%);
      padding: 60px 0 40px;
      position: relative;
      overflow: hidden;
    }
    .page-hero::before {
      content: '';
      position: absolute;
      width: 500px; height: 500px;
      background: ${p.color};
      border-radius: 50%;
      top: -200px; right: -100px;
      opacity: 0.12;
      filter: blur(60px);
    }
    .hero-inner {
      max-width: 1100px; margin: 0 auto; padding: 0 24px;
      display: grid; grid-template-columns: 1fr 420px; gap: 48px; align-items: center;
    }
    .hero-left .page-tag {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
      color: white; padding: 6px 16px; border-radius: 100px;
      font-size: 13px; font-weight: 600; margin-bottom: 20px;
    }
    .hero-left h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); color: white; margin-bottom: 16px; line-height: 1.15; }
    .hero-left p { font-size: 1.05rem; color: rgba(255,255,255,0.7); margin-bottom: 28px; line-height: 1.7; }
    .price-display { display: flex; align-items: baseline; gap: 8px; margin-bottom: 28px; }
    .price-display .at { color: rgba(255,255,255,0.5); font-size: 14px; }
    .price-display .amt { font-family: Outfit,sans-serif; font-size: 2.8rem; font-weight: 800; color: #F59E0B; }
    .price-display .per { color: rgba(255,255,255,0.5); font-size: 14px; }
    .hero-form {
      background: white; border-radius: 20px; padding: 32px 28px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.3);
      position: relative; overflow: hidden;
    }
    .hero-form::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background: linear-gradient(135deg,${p.color},#06B6D4); }
    .hero-form h3 { font-size: 1.4rem; color: var(--dark); margin-bottom: 6px; }
    .hero-form > p { font-size: 13px; color: var(--gray-500); margin-bottom: 24px; }
    .form-group { margin-bottom: 14px; }
    .form-group label { display: block; font-size: 12.5px; font-weight: 600; color: var(--gray-700); margin-bottom: 5px; }
    .form-group .input-icon i { position: absolute; left: 13px; top: 50%; transform: translateY(-50%); color: var(--gray-400); font-size: 13px; }
    .form-group input {
      width: 100%; padding: 11px 13px 11px 38px;
      border: 1.5px solid var(--gray-200); border-radius: 10px;
      font-size: 13.5px; outline: none; transition: all 0.2s;
      font-family: Inter, sans-serif; background: var(--gray-50);
    }
    .form-group input:focus { border-color: ${p.color}; background: white; box-shadow: 0 0 0 3px ${p.color}22; }
    .input-icon { position: relative; }
    .submit-btn {
      width: 100%; padding: 14px;
      background: linear-gradient(135deg, ${p.color}, #06B6D4);
      color: white; border: none; border-radius: 10px;
      font-size: 15px; font-weight: 700; cursor: pointer;
      margin-top: 8px; font-family: Outfit, sans-serif;
      transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px ${p.color}44; }
    .form-success-msg {
      display: none; text-align: center; padding: 16px;
      background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2);
      border-radius: 10px; color: #059669; margin-top: 12px; font-size: 14px;
    }
    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; }
      .hero-form { max-width: 480px; margin: 0 auto; }
    }
  </style>
</head>
<body>
  <div id="nav-placeholder"></div>

  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="hero-inner">
      <div class="hero-left">
        <div class="page-tag">
          <i class="${p.icon}"></i> ${p.tag}
        </div>
        <h1>${p.h1}</h1>
        <p>${p.tagline}</p>
        ${p.price ? `<div class="price-display">
          <span class="at">Starting at</span>
          <span class="amt">${p.price}</span>
          <span class="per">onwards</span>
        </div>` : ''}
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="index.html#enquiry-form" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Get Free Quote</a>
          <a href="contact.html" class="btn btn-ghost"><i class="fas fa-phone-alt"></i> Talk to Expert</a>
        </div>
        ${p.price ? '<p style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:12px;">* Government charges extra</p>' : ''}
      </div>
      <div class="hero-form">
        <h3>Get Free Consultation</h3>
        <p>Our expert will call you within 30 minutes</p>
        <form id="pageForm" novalidate>
          <div class="form-group">
            <label>Full Name *</label>
            <div class="input-icon">
              <i class="fas fa-user"></i>
              <input type="text" id="pf-name" placeholder="Your full name" required/>
            </div>
          </div>
          <div class="form-group">
            <label>Email *</label>
            <div class="input-icon">
              <i class="fas fa-envelope"></i>
              <input type="email" id="pf-email" placeholder="Your email address" required/>
            </div>
          </div>
          <div class="form-group">
            <label>Mobile Number *</label>
            <div class="input-icon">
              <i class="fas fa-phone"></i>
              <input type="tel" id="pf-phone" placeholder="10-digit mobile number" required/>
            </div>
          </div>
          <div class="form-group">
            <label>City</label>
            <div class="input-icon">
              <i class="fas fa-map-marker-alt"></i>
              <input type="text" id="pf-city" placeholder="Your city"/>
            </div>
          </div>
          <button type="submit" class="submit-btn" id="pf-submit">
            <i class="fas fa-paper-plane"></i> Get Started Now
          </button>
          <div class="form-success-msg" id="pf-success">
            <i class="fas fa-check-circle"></i> Thank you! Our expert will contact you shortly.
          </div>
        </form>
      </div>
    </div>
  </div>

  ${serviceContent}
  ${stepsContent}
  ${faqContent}

  <!-- CTA BANNER -->
  <section class="cta-banner">
    <div class="cta-container">
      <div class="cta-content">
        <h2>Ready to Get Started?</h2>
        <p>Our experts are ready to help you with ${p.h1}. Get a free consultation today.</p>
      </div>
      <div class="cta-actions">
        <a href="index.html#enquiry-form" class="btn btn-white"><i class="fas fa-paper-plane"></i> Get Free Consultation</a>
        <a href="tel:+911234567890" class="btn btn-outline-white"><i class="fas fa-phone"></i> Call Us Now</a>
      </div>
    </div>
  </section>

  <div id="footer-placeholder"></div>

  <script src="components.js"></script>
  <script>
    // FAQ Toggle
    function toggleFAQ(el) {
      const item = el.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    }
    // Form Submit
    document.getElementById('pageForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('pf-submit');
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
      btn.disabled = true;
      const data = {
        fullName: document.getElementById('pf-name').value.trim(),
        email: document.getElementById('pf-email').value.trim(),
        phone: document.getElementById('pf-phone').value.trim(),
        city: document.getElementById('pf-city').value.trim(),
        service: '${p.h1}',
        timestamp: new Date().toISOString()
      };
      try {
        await fetch('/api/enquiry', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
      } catch {}
      document.getElementById('pf-success').style.display = 'block';
      document.getElementById('pageForm').reset();
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Get Started Now';
      btn.disabled = false;
    });
  </script>
</body>
</html>`;
}

let created = 0;
pages.forEach(p => {
  const html = generatePage(p);
  fs.writeFileSync(path.join(__dirname, p.file), html);
  console.log(`✅ Created: ${p.file}`);
  created++;
});

console.log(`\n🎉 Done! Created ${created} pages.`);