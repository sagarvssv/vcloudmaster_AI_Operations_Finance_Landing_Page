// All page copy, in English and Arabic.
// Arabic copy is a first-pass translation. Have a native speaker review it before launch.

export const content = {
  en: {
    meta: { dir: 'ltr', switchLabel: 'العربية', switchTo: 'ar', switchAria: 'View this page in Arabic' },
    nav: { cta: 'Register interest', home: 'VCloudMaster home' },

    hero: {
      eyebrow: 'UAE · Finance & Operations',
      titleLead: 'Agentic AI for',
      titleAccent: 'Finance & Operations',
      sub: 'See how AWS-powered agentic AI moves your finance and operations teams beyond automation to intelligent decision-making.',
      primary: 'Reserve your seat',
      secondary: 'See the events',
      formats: ['In person · Dubai', 'Online webinar'],
    },

    console: {
      label: 'Agent preview',
      caption: 'Illustrative example',
      goalLabel: 'Goal',
      goal: 'Close month-end reconciliation',
      steps: [
        'Read bank statements and invoices',
        'Match transactions across systems',
        'Flag exceptions for review',
        'Request approval from the finance lead',
      ],
      status: { done: 'Done', running: 'Working', waiting: 'Awaiting you', queued: 'Queued' },
      human: 'Human in control',
    },

    form: {
      title: 'Register your interest',
      subtitle: 'Seats are limited. Reserve yours today.',
      name: 'Full name',
      email: 'Work email',
      company: 'Company',
      job: 'Job title',
      join: 'I would like to join',
      options: { both: 'Both events', dubai: 'In person · Dubai', online: 'Online webinar' },
      submit: 'Request invitation',
      sending: 'Sending…',
      consent: 'By registering, you agree to be contacted about these events.',
      successTitle: "You're on the list",
      successBody: 'Thank you for registering. Our team will send you the event details shortly.',
      again: 'Register another person',
      error: 'Something went wrong. Please try again, or email us at sales@vcloudmaster.com.',
      errors: { required: 'This field is required', email: 'Enter a valid work email' },
    },

    what: {
      eyebrow: 'The shift',
      title: 'What is agentic AI?',
      body: 'Agentic AI goes beyond automating fixed steps. These systems can understand a goal, plan the work, use your business tools and act on it, with people staying in control of the decisions that matter.',
      flow: ['Understand the goal', 'Plan the work', 'Use your tools', 'Act, with you in control'],
      cards: [
        {
          title: 'In finance',
          body: 'Support for reconciliation, approvals, reporting and spend review, so teams spend more time on analysis and less on manual checks.',
          tags: ['Reconciliation', 'Approvals', 'Reporting', 'Spend review'],
        },
        {
          title: 'In operations',
          body: 'Coordinating workflows, handling exceptions and routing requests across systems, so processes keep moving without constant manual hand-offs.',
          tags: ['Workflows', 'Exceptions', 'Request routing'],
        },
      ],
    },

    useCases: {
      eyebrow: 'Use cases',
      title: 'Where agentic AI fits',
      body: 'Agents work alongside your teams on defined tasks, connected to your systems, with guardrails and human approval where it matters.',
      poweredBy: 'Powered by',
      groups: [
        {
          key: 'finance',
          label: 'Finance',
          items: [
            { icon: 'scan', title: 'Invoice and document processing', body: 'Read invoices, statements and forms, validate the data and route exceptions to the right person.', services: ['Amazon Textract', 'Amazon Bedrock'] },
            { icon: 'match', title: 'Reconciliation and month-end close', body: 'Match transactions across systems, flag differences and draft explanations for your team to review.', services: ['Amazon Bedrock AgentCore', 'AWS Lambda'] },
            { icon: 'chart', title: 'Reporting and financial insight', body: 'Answer finance questions in plain language and prepare management summaries from governed data.', services: ['Amazon Bedrock Knowledge Bases', 'Amazon Athena'] },
            { icon: 'shield', title: 'Spend and policy checks', body: 'Review spend and approvals against policy, with guardrails and a full audit trail.', services: ['Amazon Bedrock Guardrails', 'AWS CloudTrail'] },
          ],
        },
        {
          key: 'ops',
          label: 'Operations',
          items: [
            { icon: 'flow', title: 'Workflow orchestration', body: 'Coordinate multi-step processes across teams and systems, with human approval at key steps.', services: ['AWS Step Functions', 'Amazon Bedrock AgentCore'] },
            { icon: 'alert', title: 'Exception handling', body: 'Detect, triage and resolve process exceptions, and escalate complex cases to your people.', services: ['Amazon Bedrock', 'Amazon EventBridge'] },
            { icon: 'chat', title: 'Request and service handling', body: 'Understand internal or customer requests, route them and draft responses from your knowledge base.', services: ['Amazon Bedrock Knowledge Bases', 'AWS Lambda'] },
            { icon: 'plug', title: 'ERP and system integration', body: 'Let agents read from and act in your ERP and business systems through secure, governed tools.', services: ['Amazon Bedrock AgentCore Gateway', 'AWS IAM'] },
          ],
        },
      ],
    },
    aws: {
      eyebrow: 'Technology',
      title: 'Built on AWS',
      body: 'Our approach uses AWS services to take agents from idea to secure, production-ready workflows.',
      services: [
        { label: 'Foundation models', name: 'Amazon Bedrock', body: 'Access leading foundation models through one managed service to power reasoning and language tasks.' },
        { label: 'Agents', name: 'Amazon Bedrock AgentCore', body: 'Build, deploy and operate AI agents securely at scale, with the identity, memory and monitoring they need.' },
        { label: 'Safety', name: 'Amazon Bedrock Guardrails', body: 'Apply safeguards to agent inputs and outputs so responses stay within your policies.' },
        { label: 'Documents', name: 'Amazon Textract', body: 'Extract text and data from invoices, statements and forms to feed finance and operations workflows.' },
      ],
      note: 'Examples of AWS services relevant to agentic AI. The final architecture is shaped around your environment and requirements.',
    },

    audience: {
      eyebrow: 'Who should attend',
      title: 'Built for business and technology leaders',
      roles: ['CFOs', 'CIOs', 'CTOs', 'COOs', 'Finance Directors', 'IT Directors', 'Operations Leaders'],
      groups: [
        { key: 'finance', label: 'Finance', focus: 'Reconciliation, approvals, reporting and spend review', roles: ['CFOs', 'Finance Directors'] },
        { key: 'tech', label: 'Technology', focus: 'Secure, production-ready agents on AWS', roles: ['CIOs', 'CTOs', 'IT Directors'] },
        { key: 'ops', label: 'Operations', focus: 'Workflows, exceptions and request routing', roles: ['COOs', 'Operations Leaders'] },
      ],
    },

    events: {
      eyebrow: 'Events',
      title: 'Two ways to join the conversation',
      dateLabel: 'Date',
      venueLabel: 'Venue',
      register: 'Register',
      dubai: {
        badge: 'In person · Dubai',
        title: 'The Future of Finance & Operations: Unlocking Business Value with Agentic AI',
        series: 'Dubai Customersphere',
      },
      online: {
        badge: 'Online',
        title: 'Agentic AI in Finance & Operations: Moving Beyond Automation to Intelligent Decision-Making',
        series: 'Virtual webinar',
        anywhere: 'Join from anywhere',
      },
    },

    takeaways: {
      title: 'What you will take away',
      items: [
        { title: 'Practical use cases', body: 'See how agentic AI applies to real finance and operations workflows.' },
        { title: 'Beyond automation', body: 'Understand the shift from rule-based automation to systems that reason, decide and act.' },
        { title: 'A clear path forward', body: 'Discuss your priorities with our team and explore a proof of concept for your business.' },
      ],
    },

    industries: {
      title: 'Relevant across industries',
      items: ['Banking & financial services', 'Retail', 'Healthcare', 'Logistics', 'Manufacturing', 'Professional services', 'Real estate'],
      body: 'Wherever finance and operations teams handle documents, approvals and hand-offs, agents can help.',
      ctaTitle: 'Your industry not listed?',
      ctaBody: 'Talk to our team',
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, answered',
      contact: { title: 'Still have a question?', body: 'Our team is happy to help with anything about the events.', button: 'Email our team' },
      items: [
        { q: 'Who should attend?', a: 'Finance, technology and operations leaders, including CFOs, CIOs, CTOs, COOs and their directors.' },
        { q: 'Can I join both events?', a: 'Yes. Choose both when you register, or pick the one that suits you best.' },
        { q: 'What happens after I register?', a: 'Our team will send you the event details and may follow up to understand your priorities.' },
      ],
    },

    cta: { title: 'Ready to see agentic AI in action?', button: 'Register your interest' },

    footer: {
      company: 'VCloudMaster FZE LLC',
      address: 'Viyaan Business Center, Office No. 1, Mezzanine Floor, Al Kazim Building, 189 28th St, Hor Al Anz East, Deira, Dubai, United Arab Emirates',
      trademark: 'AWS and Amazon Web Services are trademarks of Amazon.com, Inc. or its affiliates.',
      rights: 'All rights reserved.',
    },
  },

  ar: {
    meta: { dir: 'rtl', switchLabel: 'English', switchTo: 'en', switchAria: 'View this page in English' },
    nav: { cta: 'سجّل اهتمامك', home: 'الصفحة الرئيسية لـ VCloudMaster' },

    hero: {
      eyebrow: 'الإمارات · المالية والعمليات',
      titleLead: 'الذكاء الاصطناعي الوكيلي',
      titleAccent: 'للمالية والعمليات',
      sub: 'اكتشف كيف ينقل الذكاء الاصطناعي الوكيلي المدعوم من AWS فرق المالية والعمليات لديك من الأتمتة إلى اتخاذ القرارات الذكية.',
      primary: 'احجز مقعدك',
      secondary: 'استعرض الفعاليات',
      formats: ['حضورياً · دبي', 'ندوة عبر الإنترنت'],
    },

    console: {
      label: 'معاينة الوكيل',
      caption: 'مثال توضيحي',
      goalLabel: 'الهدف',
      goal: 'إغلاق مطابقات نهاية الشهر',
      steps: [
        'قراءة كشوفات البنك والفواتير',
        'مطابقة المعاملات عبر الأنظمة',
        'رصد الاستثناءات للمراجعة',
        'طلب الموافقة من مسؤول المالية',
      ],
      status: { done: 'تم', running: 'قيد التنفيذ', waiting: 'بانتظارك', queued: 'في الانتظار' },
      human: 'القرار بيد الإنسان',
    },

    form: {
      title: 'سجّل اهتمامك',
      subtitle: 'المقاعد محدودة. احجز مقعدك اليوم.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني للعمل',
      company: 'الشركة',
      job: 'المسمى الوظيفي',
      join: 'أرغب في حضور',
      options: { both: 'كلتا الفعاليتين', dubai: 'حضورياً · دبي', online: 'ندوة عبر الإنترنت' },
      submit: 'اطلب دعوة',
      sending: 'جارٍ الإرسال…',
      consent: 'بالتسجيل، أنت توافق على أن نتواصل معك بشأن هذه الفعاليات.',
      successTitle: 'تم تسجيلك',
      successBody: 'شكراً لتسجيلك. سيرسل لك فريقنا تفاصيل الفعالية قريباً.',
      again: 'تسجيل شخص آخر',
      error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا على sales@vcloudmaster.com.',
      errors: { required: 'هذا الحقل مطلوب', email: 'أدخل بريداً إلكترونياً صالحاً للعمل' },
    },

    what: {
      eyebrow: 'التحوّل',
      title: 'ما هو الذكاء الاصطناعي الوكيلي؟',
      body: 'يتجاوز الذكاء الاصطناعي الوكيلي أتمتة الخطوات الثابتة. فهذه الأنظمة قادرة على فهم الهدف، وتخطيط العمل، واستخدام أدوات عملك وتنفيذه، مع بقاء الأشخاص متحكمين في القرارات المهمة.',
      flow: ['فهم الهدف', 'تخطيط العمل', 'استخدام أدواتك', 'التنفيذ تحت إشرافك'],
      cards: [
        {
          title: 'في المالية',
          body: 'دعم المطابقات والموافقات وإعداد التقارير ومراجعة الإنفاق، ليقضي الفريق وقتاً أطول في التحليل ووقتاً أقل في التدقيق اليدوي.',
          tags: ['المطابقات', 'الموافقات', 'التقارير', 'مراجعة الإنفاق'],
        },
        {
          title: 'في العمليات',
          body: 'تنسيق سير العمل ومعالجة الاستثناءات وتوجيه الطلبات عبر الأنظمة، لتستمر العمليات دون الحاجة إلى تسليم يدوي متواصل.',
          tags: ['سير العمل', 'الاستثناءات', 'توجيه الطلبات'],
        },
      ],
    },

    useCases: {
      eyebrow: 'حالات الاستخدام',
      title: 'أين يناسب الذكاء الاصطناعي الوكيلي',
      body: 'يعمل الوكلاء جنباً إلى جنب مع فرقك على مهام محددة، متصلين بأنظمتك، مع ضوابط حماية وموافقة بشرية حيث يهم الأمر.',
      poweredBy: 'مدعوم بـ',
      groups: [
        {
          key: 'finance',
          label: 'المالية',
          items: [
            { icon: 'scan', title: 'معالجة الفواتير والمستندات', body: 'قراءة الفواتير والكشوفات والنماذج، والتحقق من البيانات، وتوجيه الاستثناءات إلى الشخص المناسب.', services: ['Amazon Textract', 'Amazon Bedrock'] },
            { icon: 'match', title: 'المطابقات وإغلاق نهاية الشهر', body: 'مطابقة المعاملات عبر الأنظمة، ورصد الفروقات، وصياغة التفسيرات ليراجعها فريقك.', services: ['Amazon Bedrock AgentCore', 'AWS Lambda'] },
            { icon: 'chart', title: 'التقارير والرؤى المالية', body: 'الإجابة عن الأسئلة المالية بلغة واضحة وإعداد ملخصات للإدارة من بيانات موثوقة.', services: ['Amazon Bedrock Knowledge Bases', 'Amazon Athena'] },
            { icon: 'shield', title: 'مراجعة الإنفاق والسياسات', body: 'مراجعة الإنفاق والموافقات وفق السياسات، مع ضوابط حماية وسجل تدقيق كامل.', services: ['Amazon Bedrock Guardrails', 'AWS CloudTrail'] },
          ],
        },
        {
          key: 'ops',
          label: 'العمليات',
          items: [
            { icon: 'flow', title: 'تنسيق سير العمل', body: 'تنسيق العمليات متعددة الخطوات عبر الفرق والأنظمة، مع موافقة بشرية في المراحل الرئيسية.', services: ['AWS Step Functions', 'Amazon Bedrock AgentCore'] },
            { icon: 'alert', title: 'معالجة الاستثناءات', body: 'رصد استثناءات العمليات وفرزها وحلّها، وتصعيد الحالات المعقدة إلى فريقك.', services: ['Amazon Bedrock', 'Amazon EventBridge'] },
            { icon: 'chat', title: 'معالجة الطلبات والخدمات', body: 'فهم الطلبات الداخلية أو طلبات العملاء، وتوجيهها، وصياغة الردود من قاعدة معارفك.', services: ['Amazon Bedrock Knowledge Bases', 'AWS Lambda'] },
            { icon: 'plug', title: 'التكامل مع ERP والأنظمة', body: 'تمكين الوكلاء من القراءة من نظام ERP وأنظمة أعمالك والتنفيذ فيها عبر أدوات آمنة ومحكومة.', services: ['Amazon Bedrock AgentCore Gateway', 'AWS IAM'] },
          ],
        },
      ],
    },
    aws: {
      eyebrow: 'التقنية',
      title: 'مبني على AWS',
      body: 'يعتمد نهجنا على خدمات AWS لنقل الوكلاء من الفكرة إلى سير عمل آمن وجاهز للإنتاج.',
      services: [
        { label: 'النماذج الأساسية', name: 'Amazon Bedrock', body: 'الوصول إلى نماذج أساسية رائدة عبر خدمة مُدارة واحدة لدعم مهام الاستدلال واللغة.' },
        { label: 'الوكلاء', name: 'Amazon Bedrock AgentCore', body: 'بناء وكلاء الذكاء الاصطناعي ونشرهم وتشغيلهم بأمان وعلى نطاق واسع، مع الهوية والذاكرة والمراقبة التي يحتاجونها.' },
        { label: 'الأمان', name: 'Amazon Bedrock Guardrails', body: 'تطبيق ضوابط حماية على مدخلات الوكلاء ومخرجاتهم لتبقى الاستجابات ضمن سياساتك.' },
        { label: 'المستندات', name: 'Amazon Textract', body: 'استخراج النصوص والبيانات من الفواتير والكشوفات والنماذج لتغذية سير عمل المالية والعمليات.' },
      ],
      note: 'أمثلة على خدمات AWS ذات الصلة بالذكاء الاصطناعي الوكيلي. تُصمَّم البنية النهائية وفقاً لبيئتك ومتطلباتك.',
    },

    audience: {
      eyebrow: 'من ينبغي أن يحضر',
      title: 'مُصمَّم لقادة الأعمال والتقنية',
      roles: ['المدراء الماليون', 'مدراء المعلومات', 'مدراء التقنية', 'مدراء العمليات', 'مدراء المالية', 'مدراء تقنية المعلومات', 'قادة العمليات'],
      groups: [
        { key: 'finance', label: 'المالية', focus: 'المطابقات والموافقات والتقارير ومراجعة الإنفاق', roles: ['المدراء الماليون', 'مدراء المالية'] },
        { key: 'tech', label: 'التقنية', focus: 'وكلاء آمنون وجاهزون للإنتاج على AWS', roles: ['مدراء المعلومات', 'مدراء التقنية', 'مدراء تقنية المعلومات'] },
        { key: 'ops', label: 'العمليات', focus: 'سير العمل والاستثناءات وتوجيه الطلبات', roles: ['مدراء العمليات', 'قادة العمليات'] },
      ],
    },

    events: {
      eyebrow: 'الفعاليات',
      title: 'طريقتان للانضمام إلى الحوار',
      dateLabel: 'التاريخ',
      venueLabel: 'المكان',
      register: 'سجّل',
      dubai: {
        badge: 'حضورياً · دبي',
        title: 'مستقبل المالية والعمليات: إطلاق قيمة الأعمال بالذكاء الاصطناعي الوكيلي',
        series: 'Dubai Customersphere',
      },
      online: {
        badge: 'عبر الإنترنت',
        title: 'الذكاء الاصطناعي الوكيلي في المالية والعمليات: من الأتمتة إلى اتخاذ القرارات الذكية',
        series: 'ندوة افتراضية',
        anywhere: 'انضم من أي مكان',
      },
    },

    takeaways: {
      title: 'ما الذي ستخرج به',
      items: [
        { title: 'حالات استخدام عملية', body: 'تعرّف على كيفية تطبيق الذكاء الاصطناعي الوكيلي على سير العمل الفعلي في المالية والعمليات.' },
        { title: 'ما بعد الأتمتة', body: 'افهم التحوّل من الأتمتة القائمة على القواعد إلى أنظمة تستدلّ وتقرّر وتنفّذ.' },
        { title: 'مسار واضح للمضي قدماً', body: 'ناقش أولوياتك مع فريقنا واستكشف إثبات مفهوم لأعمالك.' },
      ],
    },

    industries: {
      title: 'ذو صلة بمختلف القطاعات',
      items: ['البنوك والخدمات المالية', 'التجزئة', 'الرعاية الصحية', 'الخدمات اللوجستية', 'التصنيع', 'الخدمات المهنية', 'العقارات'],
      body: 'أينما تتعامل فرق المالية والعمليات مع المستندات والموافقات وعمليات التسليم، يمكن للوكلاء المساعدة.',
      ctaTitle: 'لم تجد قطاعك؟',
      ctaBody: 'تحدّث مع فريقنا',
    },

    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلة وأجوبة',
      contact: { title: 'هل لديك سؤال آخر؟', body: 'يسعد فريقنا بمساعدتك في أي استفسار حول الفعاليات.', button: 'راسل فريقنا' },
      items: [
        { q: 'من ينبغي أن يحضر؟', a: 'قادة المالية والتقنية والعمليات، بمن فيهم المدراء الماليون ومدراء المعلومات ومدراء التقنية ومدراء العمليات والمدراء العاملون معهم.' },
        { q: 'هل يمكنني حضور الفعاليتين؟', a: 'نعم. اختر كلتيهما عند التسجيل، أو اختر الفعالية التي تناسبك.' },
        { q: 'ماذا يحدث بعد التسجيل؟', a: 'سيرسل لك فريقنا تفاصيل الفعالية، وقد يتواصل معك لفهم أولوياتك.' },
      ],
    },

    cta: { title: 'هل أنت مستعد لرؤية الذكاء الاصطناعي الوكيلي أثناء العمل؟', button: 'سجّل اهتمامك' },

    footer: {
      company: 'VCloudMaster FZE LLC',
      address: 'مركز فيان للأعمال، مكتب رقم 1، طابق الميزانين، مبنى الكاظم، 189 شارع 28، هور العنز شرق، ديرة، دبي، الإمارات العربية المتحدة',
      trademark: 'AWS وAmazon Web Services علامتان تجاريتان لشركة Amazon.com, Inc. أو الشركات التابعة لها.',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
};
