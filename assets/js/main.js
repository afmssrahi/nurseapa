/* Nurse Apa — main.js
 * - i18n EN <-> BN
 * - mobile nav
 * - year + form feedback
 */
(function () {
  'use strict';

  // ---------- i18n dictionary ----------
  const i18n = {
    en: {
      'brand.tagline': 'Care You Can Trust',
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Trusted Home Nursing in Dhaka',
      'hero.title': 'Professional home nursing — <span class="accent">right at your door.</span>',
      'hero.lead': "Trained nurses, sterile equipment, and on-time visits across the city. From a single injection to round-the-clock elderly care — Nurse Apa brings hospital-grade care home.",
      'hero.ctaCall': 'Book a nurse now',
      'hero.ctaServices': 'View all services',
      'hero.badge1': 'Trained & experienced nurses',
      'hero.badge2': '100% hygienic & safe',
      'hero.badge3': 'Punctual & reliable',
      'hero.cardName': 'Nurse Apa Agency',
      'hero.cardRole': 'Care Coordinator',
      'hero.statSupport': 'Support across the city',

      'why.eyebrow': 'Why choose Nurse Apa',
      'why.title': 'Care that comes to you — on time, every time.',
      'why.f1Title': 'Safe & hygienic care',
      'why.f1Text': 'Sterile equipment, single-use supplies and strict hygiene protocols on every visit.',
      'why.f2Title': 'Home service across the city',
      'why.f2Text': 'We reach you anywhere in Dhaka — quick dispatch and on-time visits.',
      'why.f3Title': 'On-time & reliable',
      'why.f3Text': "No long waits. Book a slot — we show up when we say we will.",
      'why.f4Title': 'Compassionate & professional',
      'why.f4Text': 'Trained nurses who treat your family like their own — gentle, kind and skilled.',

      'srv.eyebrow': 'Our services',
      'srv.title': 'Hospital-quality care, at your home.',
      'srv.lead': "From a single injection to long-term elderly care — choose the service you need and we'll send a trained nurse to your door.",
      'srv.viewAll': 'View all services',
      'srv.learnMore': 'Read more →',

      'srv.iv.title': 'IV injection at home',
      'srv.iv.text': "Safe, sterile & professional IV injection in the comfort of your home.",
      'srv.iv.desc': "Need an IV drip or IV injection but don't want to go to a clinic? Our trained nurses provide safe, sterile IV injection services in the comfort of your home — perfect for post-operative recovery, dehydration, or prescribed courses.",
      'srv.im.title': 'IM injection at home',
      'srv.im.text': 'Professional intramuscular injection service by trained nurses.',
      'srv.im.desc': 'Professional intramuscular injections delivered at your home. We follow correct site, angle and technique — reducing pain and the risk of complications for patients of every age.',
      'srv.routine.title': 'Routine injection',
      'srv.routine.text': 'Regular & prescribed injection service as per your schedule.',
      'srv.routine.desc': "Regular & prescribed injections as per your doctor's schedule. We keep timing consistent and our records organized so you never miss a dose.",
      'srv.one.title': 'One-time injection',
      'srv.one.text': 'Single-dose injection service at your convenience.',
      'srv.one.desc': 'Single-dose injection at your convenience. Quick, painless, and completed in a single visit by a qualified Nurse Apa nurse.',
      'srv.can.title': 'IV cannulation',
      'srv.can.text': 'Expert IV cannulation insertion for safe & smooth access.',
      'srv.can.desc': 'Expert IV cannulation insertion for safe and smooth venous access. Ideal for patients starting an IV course, antibiotic drip or chemotherapy support at home.',
      'srv.foley.title': 'Foley catheter insertion',
      'srv.foley.text': 'Safe & comfortable Foley catheter insertion by trained nurses.',
      'srv.foley.desc': 'Safe and comfortable Foley catheter insertion by trained nurses. We follow strict sterile technique and gentle handling for bedridden, post-surgical and elderly patients.',
      'srv.ng.title': 'Ryle / NG tube insertion',
      'srv.ng.text': 'Professional NG tube insertion with proper care & monitoring.',
      'srv.ng.desc': "Professional NG (Ryle's) tube insertion with proper care and monitoring. Useful for patients who need feeding, medication, or gastric drainage at home.",
      'srv.wound.title': 'Wound dressing at home',
      'srv.wound.text': 'Clean, sterile & painless wound dressing at your home.',
      'srv.wound.desc': 'Clean, sterile and painless wound dressing at your home. From surgical wounds to bedsores and diabetic ulcers — we help wounds heal faster with proper dressing and care.',
      'srv.blood.title': 'Blood collection at home',
      'srv.blood.text': 'Accurate & hygienic blood collection at your home for lab tests.',
      'srv.blood.desc': 'Accurate & hygienic blood collection at your home for lab tests. We partner with top labs in Dhaka — your samples are sealed, labelled and dropped off safely.',

      'srv.feat.trained': 'Trained & experienced nurses',
      'srv.feat.hygienic': '100% hygienic & safe',
      'srv.feat.punctual': 'Punctual & reliable service',
      'srv.feat.affordable': 'Affordable & trusted care',

      'how.eyebrow': 'How it works',
      'how.title': 'Book a nurse in 3 simple steps.',
      'how.s1Title': 'Call or message',
      'how.s1Text': 'Tell us which service you need and your location in Dhaka.',
      'how.s2Title': 'Confirm a time',
      'how.s2Text': "We confirm an on-time slot that fits your schedule.",
      'how.s3Title': 'Nurse at your door',
      'how.s3Text': 'A trained nurse arrives with sterile equipment and completes the service.',

      'cta.title': 'Need a nurse today?',
      'cta.lead': "Call now — a care coordinator will arrange the right service for your family.",

      'srvPg.eyebrow': 'Our services',
      'srvPg.title': 'Home nursing services across Dhaka.',
      'srvPg.lead': 'Choose the care you need. Trained, experienced nurses arrive on time with sterile equipment — and treat your family with kindness.',

      'about.eyebrow': 'About us',
      'about.title': 'Care you can trust — at your door.',
      'about.lead': 'Nurse Apa Agency is on a mission to make professional home nursing simple, hygienic and accessible for every family in Dhaka.',
      'about.ourStory': 'Our story',
      'about.storyP1': 'We started Nurse Apa because we saw a gap — too many families struggling to arrange qualified, on-time nursing for elderly parents, post-surgery recovery or chronic care. We built an agency where every nurse is trained, every visit is hygienic, and every patient is treated like family.',
      'about.storyP2': 'Today, our care coordinators arrange thousands of home visits a year across Dhaka — from a single injection to long-term elderly care. Same promise: <strong>safe, sterile, on-time, and compassionate.</strong>',
      'about.values': 'Our values',
      'about.valuesTitle': 'What every visit looks like.',
      'about.v1Title': 'Trained nurses',
      'about.v1Text': 'Background-checked, qualified and re-trained regularly.',
      'about.v2Title': 'Hygienic equipment',
      'about.v2Text': 'Sterile, single-use supplies on every visit.',
      'about.v3Title': 'Punctual visits',
      'about.v3Text': 'Coordinated routing keeps our nurses on time.',
      'about.v4Title': 'Affordable care',
      'about.v4Text': 'Transparent pricing, no hidden charges, friendly support.',

      'contactPg.eyebrow': 'Contact us',
      'contactPg.title': 'Book a home nurse in Dhaka.',
      'contactPg.lead': 'Call us, message us on Facebook, or use the form below. We usually reply within minutes.',
      'contact.call': 'Call us',
      'contact.fb': 'Facebook',
      'contact.mail': 'Email',
      'contact.loc': 'Service area',
      'contact.locVal': 'Dhaka & surrounding areas',
      'contact.formTitle': 'Send a request',
      'contact.formLead': "Tell us what you need — we'll get back to you quickly.",
      'form.name': 'Your name',
      'form.phone': 'Phone',
      'form.service': 'Service needed',
      'form.msg': 'Message',
      'form.send': 'Send request',
      'form.note': 'Tip: for the fastest booking, please call us directly.',
      'form.thanks': "Thanks! We'll call you shortly. For immediate booking, dial 01961-414362.",

      'footer.about': "Nurse Apa Agency provides trained, hygienic and affordable home nursing across Dhaka. Care you can trust — at your door.",
      'footer.servicesTitle': 'Services',
      'footer.company': 'Company',
      'footer.contact': 'Contact',
      'footer.city': 'Dhaka, Bangladesh',
      'footer.rights': 'All rights reserved.',
      'footer.motto': 'Care you can trust.'
    },

    bn: {
      'brand.tagline': 'যত্ন যাকে বলে বিশ্বাস',
      'nav.home': 'হোম',
      'nav.services': 'সেবাসমূহ',
      'nav.about': 'আমাদের সম্পর্কে',
      'nav.contact': 'যোগাযোগ',

      'hero.eyebrow': 'ঢাকায় বিশ্বস্ত হোম নার্সিং',
      'hero.title': 'পেশাদার হোম নার্সিং — <span class="accent">আপনার দোরগোড়ায়।</span>',
      'hero.lead': 'প্রশিক্ষিত নার্স, জীবাণুমুক্ত সরঞ্জাম এবং সময়মতো পরিদর্শন — সারা ঢাকা জুড়ে। একটি ইনজেকশন থেকে শুরু করে দীর্ঘমেয়াদী বয়স্ক যত্ন পর্যন্ত — নার্স আপা হাসপাতালের মানের যত্ন বাড়িতে এনে দেয়।',
      'hero.ctaCall': 'এখনই নার্স বুক করুন',
      'hero.ctaServices': 'সব সেবা দেখুন',
      'hero.badge1': 'প্রশিক্ষিত ও অভিজ্ঞ নার্স',
      'hero.badge2': '১০০% জীবাণুমুক্ত ও নিরাপদ',
      'hero.badge3': 'সময়নিষ্ঠ ও নির্ভরযোগ্য',
      'hero.cardName': 'নার্স আপা এজেন্সি',
      'hero.cardRole': 'কেয়ার কো-অর্ডিনেটর',
      'hero.statSupport': 'সারা শহরে সেবা',

      'why.eyebrow': 'কেন নার্স আপা বেছে নেবেন',
      'why.title': 'যত্ন আসছে আপনার কাছে — সময়মতো, প্রতিবার।',
      'why.f1Title': 'নিরাপদ ও স্বাস্থ্যকর সেবা',
      'why.f1Text': 'জীবাণুমুক্ত সরঞ্জাম, একবার-ব্যবহারযোগ্য উপকরণ এবং প্রতিটি পরিদর্শনে কঠোর স্বাস্থ্যবিধি।',
      'why.f2Title': 'সারা শহরে হোম সার্ভিস',
      'why.f2Text': 'ঢাকার যেকোনো প্রান্তে আমরা পৌঁছাই — দ্রুত প্রেরণ ও সময়মতো পরিদর্শন।',
      'why.f3Title': 'সময়নিষ্ঠ ও নির্ভরযোগ্য',
      'why.f3Text': 'অপেক্ষা নয়। স্লট বুক করুন — আমরা বলা সময়েই পৌঁছাই।',
      'why.f4Title': 'যত্নশীল ও পেশাদার',
      'why.f4Text': 'প্রশিক্ষিত নার্স যারা আপনার পরিবারকে নিজের পরিবারের মতো দেখে — স্নেহময়, দয়ালু ও দক্ষ।',

      'srv.eyebrow': 'আমাদের সেবাসমূহ',
      'srv.title': 'হাসপাতাল-মানের যত্ন, এখন আপনার ঘরে।',
      'srv.lead': 'একটি ইনজেকশন থেকে দীর্ঘমেয়াদী বয়স্ক যত্ন — প্রয়োজনীয় সেবা বেছে নিন, প্রশিক্ষিত নার্স পাঠানো হবে আপনার দোরগোড়ায়।',
      'srv.viewAll': 'সব সেবা দেখুন',
      'srv.learnMore': 'আরও পড়ুন →',

      'srv.iv.title': 'বাসায় IV ইনজেকশন',
      'srv.iv.text': 'নিরাপদ, জীবাণুমুক্ত ও পেশাদার IV ইনজেকশন সেবা আপনার ঘরের আরামে।',
      'srv.iv.desc': 'IV ড্রিপ বা IV ইনজেকশন প্রয়োজন, কিন্তু ক্লিনিকে যেতে চান না? আমাদের প্রশিক্ষিত নার্স আপনার ঘরে বসেই নিরাপদ ও জীবাণুমুক্ত IV ইনজেকশন সেবা দেবে — অপারেশন-পরবর্তী পুনরুদ্ধার, পানিশূন্যতা বা ডাক্তার-নির্ধারিত কোর্সের জন্য আদর্শ।',
      'srv.im.title': 'বাসায় IM ইনজেকশন',
      'srv.im.text': 'প্রশিক্ষিত নার্স দ্বারা পেশাদার ইন্ট্রামাসকুলার ইনজেকশন সেবা।',
      'srv.im.desc': 'আপনার ঘরে পেশাদার ইন্ট্রামাসকুলার ইনজেকশন। আমরা সঠিক স্থান, কোণ ও কৌশল অনুসরণ করি — যাতে ব্যথা ও জটিলতা কমে এবং সব বয়সের রোগীর জন্য সেবা নিরাপদ হয়।',
      'srv.routine.title': 'নিয়মিত ইনজেকশন',
      'srv.routine.text': 'আপনার সময়সূচি অনুযায়ী নিয়মিত ও প্রেসক্রাইবড ইনজেকশন সেবা।',
      'srv.routine.desc': 'আপনার ডাক্তারের সময়সূচি অনুযায়ী নিয়মিত ও প্রেসক্রাইবড ইনজেকশন। আমরা সময়ের ধারাবাহিকতা বজায় রাখি এবং রেকর্ড সুশৃঙ্খল রাখি — যাতে কোনো ডোজ মিস না হয়।',
      'srv.one.title': 'একবার-ব্যবহারের ইনজেকশন',
      'srv.one.text': 'আপনার সুবিধামতো একক-ডোজ ইনজেকশন সেবা।',
      'srv.one.desc': 'আপনার সুবিধামতো একক-ডোজ ইনজেকশন। দ্রুত, ব্যথাহীন, এবং যোগ্য নার্স আপা নার্সের একক পরিদর্শনে সম্পন্ন।',
      'srv.can.title': 'IV ক্যানুলেশন',
      'srv.can.text': 'নিরাপদ ও সহজ অ্যাক্সেসের জন্য বিশেষজ্ঞ IV ক্যানুলেশন।',
      'srv.can.desc': 'নিরাপদ ও মসৃণ শিরা-প্রবেশের জন্য বিশেষজ্ঞ IV ক্যানুলেশন। বাসায় IV কোর্স, অ্যান্টিবায়োটিক ড্রিপ বা কেমোথেরাপি সহায়তা শুরু করা রোগীদের জন্য আদর্শ।',
      'srv.foley.title': 'ফোলি ক্যাথেটার স্থাপন',
      'srv.foley.text': 'প্রশিক্ষিত নার্স দ্বারা নিরাপদ ও আরামদায়ক ফোলি ক্যাথেটার স্থাপন।',
      'srv.foley.desc': 'প্রশিক্ষিত নার্স দ্বারা নিরাপদ ও আরামদায়ক ফোলি ক্যাথেটার স্থাপন। শয্যাশায়ী, অপারেশন-পরবর্তী ও বয়স্ক রোগীদের জন্য কঠোর জীবাণুমুক্ত কৌশল ও স্নেহময় হাতের ছোঁয়া।',
      'srv.ng.title': 'রাইল / NG টিউব স্থাপন',
      'srv.ng.text': 'সঠিক যত্ন ও পর্যবেক্ষণ সহ পেশাদার NG টিউব স্থাপন।',
      'srv.ng.desc': 'সঠিক যত্ন ও পর্যবেক্ষণ সহ পেশাদার NG (রাইলস) টিউব স্থাপন। যেসব রোগীর খাবার, ওষুধ বা গ্যাস্ট্রিক ড্রেইনেজ প্রয়োজন — তাদের জন্য উপযুক্ত।',
      'srv.wound.title': 'বাসায় ক্ষত ড্রেসিং',
      'srv.wound.text': 'পরিষ্কার, জীবাণুমুক্ত ও ব্যথাহীন ক্ষত ড্রেসিং আপনার ঘরে।',
      'srv.wound.desc': 'পরিষ্কার, জীবাণুমুক্ত ও ব্যথাহীন ক্ষত ড্রেসিং আপনার ঘরে। সার্জিক্যাল ক্ষত থেকে বেডসোর ও ডায়াবেটিক আলসার — সঠিক ড্রেসিং ও যত্নে দ্রুত সারে।',
      'srv.blood.title': 'বাসায় রক্ত সংগ্রহ',
      'srv.blood.text': 'ল্যাব টেস্টের জন্য নির্ভুল ও জীবাণুমুক্ত রক্ত সংগ্রহ আপনার ঘরে।',
      'srv.blood.desc': 'ল্যাব টেস্টের জন্য নির্ভুল ও জীবাণুমুক্ত রক্ত সংগ্রহ আপনার ঘরে। আমরা ঢাকার শীর্ষ ল্যাবগুলোর সাথে কাজ করি — আপনার নমুনা সিল করে, লেবেল করে নিরাপদে পৌঁছে দেওয়া হয়।',

      'srv.feat.trained': 'প্রশিক্ষিত ও অভিজ্ঞ নার্স',
      'srv.feat.hygienic': '১০০% জীবাণুমুক্ত ও নিরাপদ',
      'srv.feat.punctual': 'সময়নিষ্ঠ ও নির্ভরযোগ্য সেবা',
      'srv.feat.affordable': 'সাশ্রয়ী ও বিশ্বস্ত যত্ন',

      'how.eyebrow': 'কীভাবে কাজ করে',
      'how.title': 'মাত্র ৩টি সহজ ধাপে নার্স বুক করুন।',
      'how.s1Title': 'কল বা মেসেজ করুন',
      'how.s1Text': 'আপনার প্রয়োজনীয় সেবা ও ঢাকার ঠিকানা জানান।',
      'how.s2Title': 'সময় নিশ্চিত করুন',
      'how.s2Text': 'আপনার সুবিধামতো একটি সময়স্লট আমরা নিশ্চিত করি।',
      'how.s3Title': 'নার্স পৌঁছাচ্ছেন',
      'how.s3Text': 'প্রশিক্ষিত নার্স জীবাণুমুক্ত সরঞ্জাম নিয়ে পৌঁছে সেবা সম্পন্ন করেন।',

      'cta.title': 'আজই নার্স দরকার?',
      'cta.lead': 'এখনই কল করুন — কেয়ার কো-অর্ডিনেটর আপনার পরিবারের জন্য সঠিক সেবা ঠিক করে দেবেন।',

      'srvPg.eyebrow': 'আমাদের সেবাসমূহ',
      'srvPg.title': 'সারা ঢাকায় হোম নার্সিং সেবা।',
      'srvPg.lead': 'প্রয়োজনীয় যত্ন বেছে নিন। প্রশিক্ষিত, অভিজ্ঞ নার্স সময়মতো জীবাণুমুক্ত সরঞ্জাম নিয়ে পৌঁছায় — এবং আপনার পরিবারের প্রতি স্নেহের সাথে।',

      'about.eyebrow': 'আমাদের সম্পর্কে',
      'about.title': 'যত্ন যাকে বলে বিশ্বাস — আপনার দোরগোড়ায়।',
      'about.lead': 'নার্স আপা এজেন্সির লক্ষ্য — ঢাকার প্রতিটি পরিবারের জন্য পেশাদার হোম নার্সিং সহজ, স্বাস্থ্যকর ও সহজলভ্য করে তোলা।',
      'about.ourStory': 'আমাদের গল্প',
      'about.storyP1': 'আমরা নার্স আপা শুরু করেছিলাম একটি ঘাটতি দেখে — অনেক পরিবার বয়স্ক বাবা-মা, অপারেশন-পরবর্তী সুস্থতা বা দীর্ঘমেয়াদী যত্নের জন্য যোগ্য ও সময়মতো নার্স জোগাড়ে হিমশিম খাচ্ছে। আমরা এমন একটি এজেন্সি গড়েছি যেখানে প্রতিটি নার্স প্রশিক্ষিত, প্রতিটি পরিদর্শন জীবাণুমুক্ত এবং প্রতিটি রোগী পরিবারের মতোই দেখা হয়।',
      'about.storyP2': 'আজ, আমাদের কেয়ার কো-অর্ডিনেটররা প্রতি বছর ঢাকা জুড়ে হাজার হাজার হোম ভিজিটের ব্যবস্থা করেন — একটি ইনজেকশন থেকে দীর্ঘমেয়াদী বয়স্ক যত্ন পর্যন্ত। একই প্রতিশ্রুতি: <strong>নিরাপদ, জীবাণুমুক্ত, সময়নিষ্ঠ এবং যত্নশীল।</strong>',
      'about.values': 'আমাদের মূল্যবোধ',
      'about.valuesTitle': 'প্রতিটি পরিদর্শনে যা থাকে।',
      'about.v1Title': 'প্রশিক্ষিত নার্স',
      'about.v1Text': 'ব্যাকগ্রাউন্ড যাচাইকৃত, যোগ্যতাসম্পন্ন ও নিয়মিত পুনঃপ্রশিক্ষিত।',
      'about.v2Title': 'জীবাণুমুক্ত সরঞ্জাম',
      'about.v2Text': 'প্রতিটি পরিদর্শনে জীবাণুমুক্ত ও একবার-ব্যবহারযোগ্য উপকরণ।',
      'about.v3Title': 'সময়নিষ্ঠ পরিদর্শন',
      'about.v3Text': 'সমন্বিত রাউটিং আমাদের নার্সদের সময়মতো রাখে।',
      'about.v4Title': 'সাশ্রয়ী যত্ন',
      'about.v4Text': 'স্বচ্ছ মূল্য, কোনো লুকোনো চার্জ নেই, বন্ধুসুলভ সাপোর্ট।',

      'contactPg.eyebrow': 'যোগাযোগ',
      'contactPg.title': 'ঢাকায় হোম নার্স বুক করুন।',
      'contactPg.lead': 'আমাদের কল করুন, ফেসবুকে মেসেজ দিন, অথবা নিচের ফর্মটি ব্যবহার করুন। আমরা সাধারণত মিনিটের মধ্যে উত্তর দিই।',
      'contact.call': 'কল করুন',
      'contact.fb': 'ফেসবুক',
      'contact.mail': 'ইমেইল',
      'contact.loc': 'সেবা এলাকা',
      'contact.locVal': 'ঢাকা ও আশপাশের এলাকা',
      'contact.formTitle': 'অনুরোধ পাঠান',
      'contact.formLead': 'আপনার প্রয়োজনের কথা জানান — আমরা দ্রুত যোগাযোগ করব।',
      'form.name': 'আপনার নাম',
      'form.phone': 'ফোন',
      'form.service': 'প্রয়োজনীয় সেবা',
      'form.msg': 'বার্তা',
      'form.send': 'অনুরোধ পাঠান',
      'form.note': 'টিপ: দ্রুত বুকিংয়ের জন্য সরাসরি কল করুন।',
      'form.thanks': 'ধন্যবাদ! আমরা শীঘ্রই কল করব। তাৎক্ষণিক বুকিংয়ের জন্য ডায়াল করুন ০১৯৬১-৪১৪৩৬২।',

      'footer.about': 'নার্স আপা এজেন্সি ঢাকা জুড়ে প্রশিক্ষিত, স্বাস্থ্যকর ও সাশ্রয়ী হোম নার্সিং সেবা প্রদান করে। বিশ্বাসযোগ্য যত্ন — আপনার দোরগোড়ায়।',
      'footer.servicesTitle': 'সেবাসমূহ',
      'footer.company': 'কোম্পানি',
      'footer.contact': 'যোগাযোগ',
      'footer.city': 'ঢাকা, বাংলাদেশ',
      'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',
      'footer.motto': 'যত্ন যাকে বলে বিশ্বাস।'
    }
  };

  // ---------- language ----------
  const STORAGE_KEY = 'nurseapa_lang';
  const supported = ['en', 'bn'];

  function detectInitialLang() {
    // Bangla is the brand's primary language — make it the default for every visitor.
    // Anyone who explicitly toggles to English will have their choice remembered
    // via localStorage and respected on subsequent visits.
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && supported.includes(saved)) return saved;
    return 'bn';
  }

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.en;
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-bn', lang === 'bn');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // Allow simple HTML in translations (accent spans etc.)
        el.innerHTML = dict[key];
      }
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      // data-i18n-attr="attr:key,attr:key"
      el.getAttribute('data-i18n-attr').split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (dict[key]) el.setAttribute(attr, dict[key]);
      });
    });
    // Mark the active language in the two-option toggle so CSS can highlight it.
    document.querySelectorAll('.lang-opt').forEach(el => {
      const isActive = el.getAttribute('data-lang') === lang;
      el.classList.toggle('is-active', isActive);
    });
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.dataset.active = lang;
      btn.setAttribute('aria-label', lang === 'bn' ? 'বর্তমানে বাংলা — ইংরেজিতে পরিবর্তন করতে ক্লিক করুন' : 'Currently English — click to switch to বাংলা');
    }
    document.querySelectorAll('option[data-i18n]').forEach(o => {
      const k = o.getAttribute('data-i18n');
      if (dict[k]) o.textContent = dict[k];
    });
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function toggleLang() {
    const cur = localStorage.getItem(STORAGE_KEY) || detectInitialLang();
    applyLang(cur === 'en' ? 'bn' : 'en');
  }

  // ---------- mobile nav ----------
  function setupMobileNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.querySelector('.primary-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // ---------- year + form ----------
  function setupYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  // ---------- sticky header: toggle .is-stuck when the page scrolls ----------
  function setupStickyHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    let ticking = false;
    const update = () => {
      const stuck = window.scrollY > 4;
      header.classList.toggle('is-stuck', stuck);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update(); // initial state
  }

  function setupForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    const note = document.getElementById('formNote');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      if (!data.get('name') || !data.get('phone')) {
        if (note) {
          note.textContent = 'Please fill your name and phone.';
          note.classList.remove('success');
        }
        return;
      }
      // Build a mailto: fallback so static-only sites still receive requests.
      const subject = encodeURIComponent('Nurse Apa booking request — ' + (data.get('service') || 'General'));
      const body = encodeURIComponent(
        'Name: ' + data.get('name') + '\n' +
        'Phone: ' + data.get('phone') + '\n' +
        'Service: ' + (data.get('service') || '-') + '\n' +
        'Message: ' + (data.get('message') || '-')
      );
      window.location.href = 'mailto:hello@nurseapa.agency?subject=' + subject + '&body=' + body;
      if (note) {
        const thanks = (i18n[document.documentElement.lang] || i18n.en)['form.thanks'];
        note.textContent = thanks;
        note.classList.add('success');
      }
      form.reset();
    });
  }

  // ---------- init ----------
  document.addEventListener('DOMContentLoaded', () => {
    applyLang(detectInitialLang());
    setupMobileNav();
    setupYear();
    setupStickyHeader();
    setupForm();
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', toggleLang);
  });
})();
