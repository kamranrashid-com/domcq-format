```json
{
  "format": "domcq/1",
  "exam": "cism",
  "set": "Certified Information Security Manager (CISM) practice – Mixed domains set 1",
  "questions": [
    {
      "stem": "Which of the following is the PRIMARY objective of developing an information security strategy?",
      "options": [
        "To ensure that all identified vulnerabilities are remediated within agreed time frames",
        "To document the technical controls required by the organization's security standards",
        "To ensure that information security activities support and enable the organization's business objectives",
        "To demonstrate compliance with applicable laws and regulations to external auditors"
      ],
      "answer": "C",
      "explanation": "An information security strategy exists to align security with the business: it translates business objectives and risk appetite into a direction for the security program. Remediating vulnerabilities, documenting controls and demonstrating compliance are activities or outcomes within the program, but they are means to an end. If the strategy does not enable business objectives, the program will struggle to obtain management support and resources regardless of how well those activities are performed.",
      "topic": "Information Security Governance",
      "subtopic": "Information Security Strategy Development",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Information Security Strategy Development"
    },
    {
      "stem": "An information security manager has been asked to clarify the accountability for information security within the organization. Who is ULTIMATELY accountable for the protection of the organization's information assets?",
      "options": [
        "The board of directors and senior management",
        "The chief information security officer",
        "The information system owners",
        "The internal audit function"
      ],
      "answer": "A",
      "explanation": "Governance places ultimate accountability for information security with the board of directors and senior management, because they are accountable for the organization's overall performance and for protecting stakeholder interests. Responsibility for designing and running the program can be delegated to the CISO, and system owners are responsible for the security of their individual systems, but accountability cannot be delegated. Internal audit provides independent assurance and is not accountable for security outcomes.",
      "topic": "Information Security Governance",
      "subtopic": "Organizational Structures, Roles, and Responsibilities",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Organizational Structures, Roles, and Responsibilities"
    },
    {
      "stem": "A new data protection regulation has been enacted in a country where the organization operates. The information security manager determines that several existing security policies do not address the new requirements. Which of the following would be the BEST approach of the information security manager?",
      "options": [
        "Rewrite the affected policies immediately so that they mirror the wording of the regulation",
        "Transfer ownership of the affected policies to the legal department for revision and approval",
        "Defer any changes until the regulator has published its first enforcement decisions",
        "Perform a gap analysis against the regulation and present the required changes to management for approval"
      ],
      "answer": "D",
      "explanation": "Legal and regulatory requirements must be analyzed to determine exactly where current policies and controls fall short, and the resulting changes must be approved by management because policies are management's statement of intent. A structured gap analysis ensures the response is proportionate and complete rather than a hasty copy of legal text. Waiting for enforcement actions exposes the organization to non-compliance, and policy ownership belongs with management supported by security, not with the legal department alone.",
      "topic": "Information Security Governance",
      "subtopic": "Legal, Regulatory, and Contractual Requirements",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Legal, Regulatory, and Contractual Requirements"
    },
    {
      "stem": "An information security manager is preparing a business case for a security investment that will be presented to the executive committee. Which of the following is MOST important to include?",
      "options": [
        "A detailed technical specification of the products being considered",
        "The expected reduction in business risk expressed in terms the executives use to make decisions",
        "A comparison of the organization's security budget with the budgets of industry peers",
        "A list of the vulnerabilities identified in the most recent penetration test"
      ],
      "answer": "B",
      "explanation": "A business case must justify an investment in terms its decision makers understand: the business risk it reduces, the value it protects or enables, and how that compares with the cost. Executives make funding decisions based on business impact, not on product specifications or raw vulnerability lists. Peer benchmarking can provide supporting context but does not by itself show that this particular investment is worthwhile for this organization.",
      "topic": "Information Security Governance",
      "subtopic": "Strategic Planning (e.g., budgets, resources, business case)",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Strategic Planning (business case development)"
    },
    {
      "stem": "An organization purchases a cyber insurance policy to cover the financial losses that would result from a data breach. Which risk treatment option does this represent?",
      "options": [
        "Risk mitigation",
        "Risk avoidance",
        "Risk acceptance",
        "Risk transfer"
      ],
      "answer": "D",
      "explanation": "Insurance shifts part of the financial consequence of a risk event to another party, which is risk transfer (also called risk sharing). It does not reduce the likelihood or the operational impact of a breach, so it is not mitigation, and the organization continues the activity, so it is not avoidance. Note that the organization still owns the risk and remains accountable to regulators and customers; only the financial loss is transferred.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Treatment/Risk Response Options",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk Treatment/Risk Response Options"
    },
    {
      "stem": "Which of the following is the PRIMARY purpose of defining key risk indicators (KRIs) for an information security program?",
      "options": [
        "To measure the operational efficiency of the security team",
        "To provide early warning that risk exposure is approaching an unacceptable level",
        "To demonstrate to auditors that controls are operating as designed",
        "To determine the annual budget required for security controls"
      ],
      "answer": "B",
      "explanation": "KRIs are forward-looking measures selected because they signal a change in risk exposure, allowing management to act before a threshold defined by the risk appetite is exceeded. Efficiency measures and evidence of control operation are performance or control indicators rather than risk indicators. Budgeting may use risk information, but it is not the purpose of a KRI.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Monitoring and Reporting",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk Monitoring and Reporting (key risk indicators)"
    },
    {
      "stem": "A vulnerability scan identifies a critical vulnerability in a legacy application that supports a key business process. The vendor no longer provides patches, and the application cannot be replaced for at least a year. Which of the following would be the BEST course of action for the information security manager?",
      "options": [
        "Implement compensating controls to reduce the likelihood and impact of exploitation",
        "Accept the risk, since the vulnerability cannot be remediated at this time",
        "Shut down the application until a replacement can be implemented",
        "Record the vulnerability as a known exception and rescan when the replacement is in place"
      ],
      "answer": "A",
      "explanation": "When a control deficiency cannot be corrected directly, compensating controls such as network segmentation, restricted access, enhanced monitoring or application-layer filtering reduce the risk to an acceptable level while the business process continues. Accepting a critical risk without attempting treatment is inappropriate when cost-effective alternatives exist, and shutting down a key process would normally cause more harm than the risk itself. Simply documenting the exception leaves the exposure unchanged.",
      "topic": "Information Security Risk Management",
      "subtopic": "Vulnerability and Control Deficiency Analysis",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Vulnerability and Control Deficiency Analysis"
    },
    {
      "stem": "An organization uses a software-as-a-service (SaaS) application, operated by a third-party provider, to process customer orders. A risk assessment has identified a significant risk that customer data could be exposed through the application. Who should be assigned as the owner of this risk?",
      "options": [
        "The third-party provider's chief information security officer",
        "The organization's information security manager",
        "The business executive responsible for the order processing function",
        "The vendor management office that administers the contract"
      ],
      "answer": "C",
      "explanation": "Risk ownership belongs to the person who is accountable for the business process and has the authority to decide how the risk is treated and to fund that treatment; outsourcing the processing does not outsource the risk. The provider is responsible for the controls it has contractually agreed to, but the organization remains accountable to its customers. The information security manager and the vendor management office advise, monitor and facilitate, but they do not own business risk.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk and Control Ownership",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk and Control Ownership"
    },
    {
      "stem": "Which of the following types of document specifies the mandatory security configuration settings that must be applied to all servers in the organization?",
      "options": [
        "Policy",
        "Standard",
        "Guideline",
        "Framework"
      ],
      "answer": "B",
      "explanation": "Standards set out the mandatory, measurable requirements, such as specific configuration settings, that implement a policy. Policies are high-level statements of management intent and do not contain technical detail, while guidelines are recommended but optional practices. A framework is a structured model used to organize the program as a whole rather than a document prescribing settings.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Policies, Standards, Procedures, and Guidelines",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Policies, Standards, Procedures, and Guidelines"
    },
    {
      "stem": "Which of the following is the PRIMARY basis for classifying an information asset?",
      "options": [
        "The acquisition cost of the hardware and media on which the asset is stored",
        "The strength of the security controls that currently protect the asset",
        "The organizational department in which the asset was originally created",
        "The impact to the organization if the asset were disclosed, altered or made unavailable"
      ],
      "answer": "D",
      "explanation": "Classification groups assets by their value and sensitivity so that protection can be proportionate, and that value is expressed as the business impact of a loss of confidentiality, integrity or availability. The asset owner determines this impact. Storage cost, existing controls and originating department do not reflect what the information is worth to the organization; indeed, classification should drive the controls, not be derived from them.",
      "topic": "Information Security Program",
      "subtopic": "Information Asset Identification and Classification",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Asset Identification and Classification"
    },
    {
      "stem": "Which of the following is the BEST indicator that an information security awareness program is effective?",
      "options": [
        "A sustained decline in the rate of security incidents attributable to user behavior",
        "An increase in the number of employees who have completed the annual training module",
        "A high satisfaction score on surveys completed at the end of training sessions",
        "An increase in the number of awareness messages distributed during the year"
      ],
      "answer": "A",
      "explanation": "The goal of awareness is to change behavior, so the best measure of effectiveness is an outcome that reflects behavior, such as fewer incidents caused by users or lower click rates in phishing simulations over time. Completion counts and the volume of messages measure activity, not results, and satisfaction scores show whether people liked the training rather than whether they act differently afterwards.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Awareness and Training",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Awareness and Training"
    },
    {
      "stem": "An organization is about to sign a contract with a cloud service provider to host an application that processes sensitive customer data. Which of the following is MOST important for the information security manager to ensure before the contract is signed?",
      "options": [
        "The provider holds a current certification against a recognized security standard",
        "The provider's data center is located in the same country as the organization",
        "The organization's security requirements, including the right to audit, are defined in the contract",
        "The provider's staff have completed background checks and security awareness training"
      ],
      "answer": "C",
      "explanation": "Once a contract is signed, the organization can enforce only what the contract requires, so security requirements, service levels, incident notification duties and the right to audit or obtain assurance must be written in before signature. A certification is useful evidence but covers the provider's chosen scope, not necessarily the organization's needs. Data location and personnel practices are examples of individual requirements that should themselves be captured in the contract.",
      "topic": "Information Security Program",
      "subtopic": "Management of External Services (e.g., suppliers, third parties, nth parties)",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Management of External Services"
    },
    {
      "stem": "An information security manager wants to ensure that security controls are effectively built into a new business application that is being developed in-house. Which of the following would be the MOST effective approach?",
      "options": [
        "Commission a comprehensive penetration test of the application before it is released to production",
        "Define security requirements at the start of the project and verify them at each stage of the development life cycle",
        "Require all developers on the project to complete a secure coding course before development begins",
        "Insert a mandatory security review as the final acceptance gate before the application is deployed"
      ],
      "answer": "B",
      "explanation": "Security is most effective and least costly when it is integrated throughout the system development life cycle: requirements are defined up front, reflected in design, built in during development and verified in testing. Controls added or discovered at the end, whether through a penetration test or a final review, are expensive to retrofit and may be waived under schedule pressure. Developer training supports the approach but does not by itself ensure that the right controls are specified and verified.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Control Implementation and Integrations",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Control Implementation and Integrations (SDLC)"
    },
    {
      "stem": "An organization has built its information security program on the NIST Cybersecurity Framework. A major customer now requires the organization to demonstrate conformance with ISO/IEC 27001. Which of the following would be the BEST approach of the information security manager?",
      "options": [
        "Replace the existing program with one built on ISO/IEC 27001 to satisfy the customer",
        "Operate two separate control sets, one for each framework, maintained by different teams",
        "Inform the customer that the NIST Cybersecurity Framework provides equivalent assurance",
        "Map the existing controls to the ISO/IEC 27001 requirements and address only the identified gaps"
      ],
      "answer": "D",
      "explanation": "Industry frameworks overlap substantially, and mapping existing controls to the new requirement set shows what is already satisfied and what still needs to be added, avoiding duplicated effort and preserving the investment in the current program. Replacing the program is disruptive and unnecessary, and running two parallel control sets creates cost and inconsistency. Telling the customer the frameworks are equivalent ignores a contractual requirement the organization must actually meet.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Industry Standards and Frameworks",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Industry Standards and Frameworks"
    },
    {
      "stem": "Which of the following parameters defines the maximum amount of data loss, measured in time, that an organization can tolerate following a disruption?",
      "options": [
        "Recovery point objective",
        "Recovery time objective",
        "Maximum tolerable outage",
        "Service delivery objective"
      ],
      "answer": "A",
      "explanation": "The recovery point objective (RPO) is the point in time to which data must be restored, which determines how much data loss is acceptable and therefore how frequently backups or replication must occur. The recovery time objective is the time within which a process or system must be restored, and the maximum tolerable outage is the longest period a process can be unavailable before the organization suffers unacceptable harm. The service delivery objective describes the level of service to be maintained during the recovery period.",
      "topic": "Incident Management",
      "subtopic": "Disaster Recovery Plan (DRP)",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 4: Incident Management – Disaster Recovery Plan (recovery objectives: RPO, RTO, MTO, SDO)"
    },
    {
      "stem": "Which of the following is the PRIMARY purpose of classifying an incident when it is first reported?",
      "options": [
        "To identify which employee or system was responsible for causing the incident",
        "To calculate the total financial loss the organization has suffered from the incident",
        "To determine the appropriate response priority and the escalation path to follow",
        "To decide whether the incident must be disclosed publicly to customers and the media"
      ],
      "answer": "C",
      "explanation": "Classifying an incident by type and severity at intake determines how urgently it must be handled, which resources are assigned and who must be notified or escalated to, so that limited response capacity goes to the most serious events. Root cause, total loss and external disclosure decisions come later in the process once the incident is better understood. Initial classification may be revised as the investigation progresses.",
      "topic": "Incident Management",
      "subtopic": "Incident Classification/Categorization",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Classification/Categorization"
    },
    {
      "stem": "Which of the following is the MOST important outcome of a business impact analysis (BIA)?",
      "options": [
        "A list of the technical vulnerabilities present in critical systems",
        "Identification of critical business processes and the time within which they must be recovered",
        "A detailed set of step-by-step procedures for restoring systems at an alternate site",
        "An inventory of the threats most likely to cause a disruption to the organization"
      ],
      "answer": "B",
      "explanation": "The BIA determines which business processes are critical, how the impact of their loss grows over time, and the recovery objectives that follow from that, which then drive the priorities and resources in the continuity and recovery plans. Vulnerabilities and threats are addressed in risk assessment, and restoration procedures are developed afterwards in the disaster recovery plan based on the BIA's results.",
      "topic": "Incident Management",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Business Impact Analysis (BIA)"
    },
    {
      "stem": "Ransomware has been detected on several workstations and is spreading rapidly across the corporate network. Which of the following should be the information security manager's FIRST priority?",
      "options": [
        "Notify law enforcement and the organization's cyber insurance provider",
        "Begin restoring the affected workstations from the most recent backups",
        "Identify the initial point of entry used by the attackers",
        "Isolate the affected network segments to prevent further spread"
      ],
      "answer": "D",
      "explanation": "When an incident is actively spreading, containment comes first: limiting the damage protects systems that are not yet affected and preserves the organization's ability to recover. Restoring systems before the malware is contained risks reinfection, and investigating the point of entry and notifying external parties are important steps that follow once the spread has been stopped. The incident response plan should define who has the authority to take such isolation actions quickly.",
      "topic": "Incident Management",
      "subtopic": "Incident Containment Methods",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Containment Methods"
    },
    {
      "stem": "Which of the following is the PRIMARY objective of conducting a post-incident review?",
      "options": [
        "To identify lessons learned and improve the incident management process",
        "To determine which individuals should be held accountable for the incident",
        "To prepare the documentation required to support a legal claim against the attacker",
        "To confirm that all affected systems have been returned to normal operation"
      ],
      "answer": "A",
      "explanation": "The post-incident review examines what happened, how well the response worked and what should change in controls, procedures, training or tooling, feeding continuous improvement of the program. Focusing on blame discourages honest reporting and undermines the review's value. Confirming recovery is part of the recovery phase, and legal documentation is a possible by-product rather than the purpose of the review.",
      "topic": "Incident Management",
      "subtopic": "Post-incident Review Practices",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Post-incident Review Practices"
    },
    {
      "stem": "An organization wants to obtain a high degree of assurance that its disaster recovery plan will work, but senior management has stated that production operations must not be disrupted by the test. Which type of test BEST meets these requirements?",
      "options": [
        "Structured walk-through, in which the recovery team reviews the plan step by step in a meeting",
        "Simulation test, in which the team responds to a scripted scenario without activating systems",
        "Parallel test, in which recovery systems are activated and processed alongside production systems",
        "Full interruption test, in which production is shut down and operations are moved to the recovery site"
      ],
      "answer": "C",
      "explanation": "A parallel test actually brings up the recovery site and processes real or representative workloads, proving that systems, data and procedures work, while production continues uninterrupted. A full interruption test gives the highest assurance but directly violates the constraint of not disrupting operations. Walk-throughs and simulations are valuable for validating the plan and training the team, but because systems are not activated they provide much less assurance that recovery will actually succeed.",
      "topic": "Incident Management",
      "subtopic": "Incident Management Training, Testing, and Evaluation",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Management Training, Testing, and Evaluation (types of plan tests)"
    }
  ]
}
```
