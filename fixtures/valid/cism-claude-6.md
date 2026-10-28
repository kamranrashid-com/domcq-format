```json
{
  "format": "domcq/1",
  "exam": "cism",
  "set": "Certified Information Security Manager (CISM) practice – Four-domain mixed set 1",
  "questions": [
    {
      "stem": "Which of the following is the PRIMARY goal of an organization's information security strategy?",
      "options": [
        "Implementing every control listed in a recognized international standard",
        "Supporting the achievement of the organization's business objectives",
        "Eliminating information security risk across all business units",
        "Reducing the cost of security operations to the industry average"
      ],
      "answer": "B",
      "explanation": "An information security strategy exists to enable the business, so its primary goal is to support business objectives at an acceptable level of risk. Standards are tools for implementing the strategy, not its purpose. Risk can never be eliminated, only managed to within appetite, and cost reduction is a possible benefit rather than the strategic goal.",
      "topic": "Information Security Governance",
      "subtopic": "Information security strategy",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 1B: Information Security Strategy (strategy development aligned with business goals)"
    },
    {
      "stem": "Which of the following is ULTIMATELY accountable for the protection of an organization's information assets?",
      "options": [
        "The chief information security officer",
        "The information security steering committee",
        "The IT operations manager",
        "The board of directors"
      ],
      "answer": "D",
      "explanation": "Governance places ultimate accountability for protecting information assets with the board of directors and senior management, because information is a business asset and its protection is part of their fiduciary duty. The CISO manages and coordinates the security program, and a steering committee provides oversight and alignment, but neither holds ultimate accountability. IT operations implements controls under delegated responsibility.",
      "topic": "Information Security Governance",
      "subtopic": "Roles and responsibilities",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 1A: Enterprise Governance (organizational structures, roles and responsibilities)"
    },
    {
      "stem": "A new data privacy regulation will apply to the organization in 12 months. Which of the following should the information security manager do FIRST?",
      "options": [
        "Determine how the regulation affects business processes and existing controls",
        "Purchase a data loss prevention solution to protect personal data",
        "Update the security awareness training to cover the new regulation",
        "Report to the board that the organization is currently noncompliant"
      ],
      "answer": "A",
      "explanation": "Before any action can be planned, the information security manager must understand what the regulation requires and how it applies to the organization's processes, typically through an impact or gap analysis. Buying technology or updating training before the requirements are understood risks wasted effort. Reporting noncompliance is premature when the gap has not yet been assessed and the regulation is not yet in force.",
      "topic": "Information Security Governance",
      "subtopic": "Legal, regulatory and contractual requirements",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 1A: Enterprise Governance (legal, regulatory and contractual requirements)"
    },
    {
      "stem": "An organization is deciding where the information security manager should report. Which of the following is the MOST important consideration?",
      "options": [
        "Proximity to the IT operations team that implements most controls",
        "The size of the security budget the manager will directly control",
        "Sufficient authority and independence from the functions being overseen",
        "Consistency with the reporting lines used by peer organizations"
      ],
      "answer": "C",
      "explanation": "The information security function must have enough authority to influence the business and enough independence to report risk objectively. Reporting to a function whose activities security oversees, such as IT operations, can create a conflict of interest in which risk is understated. Budget size and peer practice are secondary to ensuring objective oversight and access to senior management.",
      "topic": "Information Security Governance",
      "subtopic": "Organizational structure",
      "difficulty": "hard",
      "source": "CISM Job Practice, Domain 1A: Enterprise Governance (organizational structures, roles and responsibilities)"
    },
    {
      "stem": "Which of the following should make the decision to accept a risk that affects a business process?",
      "options": [
        "The risk owner accountable for the affected business process",
        "The information security manager who assessed the risk",
        "The internal auditor who reviewed the related controls",
        "The system administrator who maintains the affected systems"
      ],
      "answer": "A",
      "explanation": "Risk acceptance is a business decision, so it belongs to the risk owner who is accountable for the business process and has the authority to accept the consequences. The information security manager advises on the risk and the options for treating it but does not own the business risk. Auditors must stay independent, and administrators lack the business authority to accept risk.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk ownership and acceptance",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 2B: Information Security Risk Response (risk and control ownership)"
    },
    {
      "stem": "Which of the following BEST determines the level of risk an organization is prepared to accept in pursuit of its objectives?",
      "options": [
        "Benchmark data from organizations in the same industry",
        "The risk appetite defined by senior management",
        "The results of the most recent vulnerability scan",
        "The cost of the controls currently available"
      ],
      "answer": "B",
      "explanation": "Risk appetite is the amount of risk the organization is willing to accept to achieve its objectives, and senior management sets it in line with the organization's strategy and culture. Benchmarks may inform that decision but do not reflect the organization's own circumstances. Scan results and control costs are inputs to risk assessment and treatment, not the definition of acceptable risk.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk appetite and tolerance",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 2A: Information Security Risk Assessment (risk appetite and tolerance)"
    },
    {
      "stem": "A critical vulnerability is found in a legacy system that the vendor no longer supports, so no patch will be released. The system must stay in production for another year. Which of the following is the BEST risk response?",
      "options": [
        "Accept the risk, because no vendor patch will ever be available",
        "Transfer the risk by purchasing additional cyber insurance cover",
        "Decommission the system immediately, regardless of business impact",
        "Apply compensating controls such as segmentation and close monitoring"
      ],
      "answer": "D",
      "explanation": "When the primary control (a patch) is unavailable, compensating controls such as network isolation, restricted access and enhanced monitoring reduce the likelihood and impact of exploitation while the business continues to use the system. Accepting a critical risk simply because no patch exists ignores the mitigation options available. Insurance offsets only financial loss, and immediate decommissioning ignores the business requirement.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk treatment options",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 2B: Information Security Risk Response (risk treatment and response options)"
    },
    {
      "stem": "An asset is valued at $200,000. A specific threat would cause a 25% loss of the asset's value each time it occurs, and it is expected to occur once every two years. A proposed control costing $12,000 per year would reduce the expected frequency to once every ten years. Which of the following BEST describes the control's financial justification?",
      "options": [
        "It is not justified, because its yearly cost exceeds the reduction in annualized loss expectancy",
        "It is justified, because it reduces annualized loss expectancy by $40,000 per year",
        "It is justified, because it reduces annualized loss expectancy by $20,000 per year",
        "It is justified, because it removes the $50,000 single loss expectancy entirely"
      ],
      "answer": "C",
      "explanation": "The single loss expectancy is $200,000 x 25% = $50,000. Annualized loss expectancy is SLE x ARO, so it falls from $50,000 x 0.5 = $25,000 to $50,000 x 0.1 = $5,000, a reduction of $20,000 per year. Because that reduction exceeds the control's $12,000 annual cost, the control is cost-justified. The control lowers how often the loss occurs, not the size of each loss, so the SLE is unchanged.",
      "topic": "Information Security Risk Management",
      "subtopic": "Quantitative risk analysis",
      "difficulty": "hard",
      "source": "CISM Job Practice, Domain 2A: Information Security Risk Assessment (risk analysis methods; SLE, ARO and ALE)"
    },
    {
      "stem": "Which of the following is responsible for determining the classification level of a set of business information?",
      "options": [
        "The system administrator who manages the storage",
        "The data owner accountable for the information",
        "The information security manager for the organization",
        "The end user who most frequently uses the data"
      ],
      "answer": "B",
      "explanation": "The data owner, usually a business manager, is accountable for the information and understands its value and sensitivity, so the owner assigns its classification. The information security manager defines the classification scheme and supports owners in applying it. Administrators act as custodians who implement the protection required by the classification, and users must handle data according to it.",
      "topic": "Information Security Program",
      "subtopic": "Information asset classification",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 3A: Information Security Program Development (information asset identification and classification)"
    },
    {
      "stem": "An organization plans to outsource the processing of customer personal data to a cloud service provider. Which of the following is MOST important to include in the contract?",
      "options": [
        "Defined security requirements and the right to audit or obtain independent assurance",
        "A fixed service price that cannot change for the full duration of the agreement",
        "A requirement for the provider to use hardware from the organization's preferred vendor",
        "A commitment from the provider to guarantee continuous availability with no downtime"
      ],
      "answer": "A",
      "explanation": "Outsourcing a process does not transfer accountability for protecting the data, so the organization needs contractually defined security requirements and a way to verify that they are met, through audit rights or independent assurance reports. Without these, the organization cannot confirm the provider manages risk within its appetite. Pricing, hardware choice and unrealistic availability guarantees do not address protection of the data.",
      "topic": "Information Security Program",
      "subtopic": "Third-party and supplier security",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 3B: Information Security Program Management (management of external services and relationships)"
    },
    {
      "stem": "Which of the following metrics would BEST demonstrate the effectiveness of a security awareness program to senior management?",
      "options": [
        "The percentage of employees who completed the annual training",
        "The number of awareness sessions delivered during the year",
        "The trend in employees clicking links in simulated phishing tests",
        "The amount of training budget spent per employee each year"
      ],
      "answer": "C",
      "explanation": "Effectiveness is shown by a change in behavior that reduces risk, and a falling click rate in simulated phishing tests measures exactly that. Completion rates and session counts measure activity, showing that training happened but not that it worked. Spending per employee is a cost measure and says nothing about outcomes.",
      "topic": "Information Security Program",
      "subtopic": "Security awareness and metrics",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 3B: Information Security Program Management (security awareness and training; program metrics)"
    },
    {
      "stem": "Which of the following documents would MOST likely specify the minimum password length required for all user accounts?",
      "options": [
        "Policy",
        "Guideline",
        "Procedure",
        "Standard"
      ],
      "answer": "D",
      "explanation": "Standards set mandatory, measurable requirements, such as a minimum password length, that put policy into practice. Policies state high-level management intent and should stay stable as technology changes. Guidelines are recommended but not mandatory, and procedures describe the step-by-step actions for carrying out a task.",
      "topic": "Information Security Program",
      "subtopic": "Policies, standards and procedures",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 3A: Information Security Program Development (information security policies, procedures and guidelines)"
    },
    {
      "stem": "An organization is developing a new customer-facing application. In which phase of the system development life cycle are security requirements MOST cost-effectively addressed?",
      "options": [
        "Testing and quality assurance",
        "Requirements definition",
        "Coding and implementation",
        "Post-implementation review"
      ],
      "answer": "B",
      "explanation": "Defining security requirements at the start lets them shape the design, so controls are built in rather than added later. The cost of correcting a security defect rises sharply the later it is found, so finding it in testing or after go-live means expensive rework. Testing then verifies the requirements that were defined earlier.",
      "topic": "Information Security Program",
      "subtopic": "Security in the system development life cycle",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 3B: Information Security Program Management (integrating security into processes and the SDLC)"
    },
    {
      "stem": "An organization implemented a control framework across all business units a year ago. A recent audit found that several controls in three business units consistently do not operate as designed. Which of the following should the information security manager do FIRST?",
      "options": [
        "Work with the business units to determine the root cause of the control failures",
        "Redesign the control framework so that it can be applied more consistently",
        "Recommend disciplinary action against the managers of the affected units",
        "Increase the frequency of audits in the affected business units"
      ],
      "answer": "A",
      "explanation": "Without knowing why the controls fail, any corrective action is a guess. The causes could be poor design, lack of resources, unclear ownership, inadequate training or a conflict with business processes, and each calls for a different fix. Redesigning the framework, disciplining managers or increasing audits may all be wrong responses until the root cause is understood.",
      "topic": "Information Security Program",
      "subtopic": "Control monitoring and remediation",
      "difficulty": "hard",
      "source": "CISM Job Practice, Domain 3B: Information Security Program Management (control implementation, testing and evaluation)"
    },
    {
      "stem": "Which of the following is the PRIMARY purpose of a business impact analysis (BIA)?",
      "options": [
        "To identify the threats and vulnerabilities affecting critical systems",
        "To test whether the recovery plan can be executed within the target times",
        "To select the most suitable alternate processing site for the organization",
        "To determine process criticality and the impact over time of a disruption"
      ],
      "answer": "D",
      "explanation": "A BIA identifies which business processes are critical and how the impact of losing them grows over time. Those findings drive recovery priorities and objectives such as recovery time and recovery point objectives. Threat and vulnerability identification belongs to risk assessment, while plan testing and site selection come after the BIA and depend on its results.",
      "topic": "Incident Management",
      "subtopic": "Business impact analysis",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 4A: Incident Management Readiness (business impact analysis)"
    },
    {
      "stem": "A security analyst confirms that a workstation is infected with ransomware that is actively encrypting files on a shared network drive. Which of the following should be done FIRST?",
      "options": [
        "Restore the affected files from the most recent backup",
        "Report the incident to the appropriate law enforcement agency",
        "Isolate the infected workstation from the network",
        "Wipe and reimage the infected workstation"
      ],
      "answer": "C",
      "explanation": "While the malware is actively causing damage, containment comes first: isolating the workstation stops further encryption and spread to other systems. Restoring files before containment risks the restored data being encrypted again. Reimaging destroys evidence and belongs to eradication and recovery, and any law enforcement notification follows the incident response plan once the incident is contained.",
      "topic": "Incident Management",
      "subtopic": "Containment",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 4B: Incident Management Operations (incident containment methods)"
    },
    {
      "stem": "Which of the following is the MOST important outcome of a post-incident review?",
      "options": [
        "Lessons learned that improve controls and the response process",
        "Identification of the employee who should face disciplinary action",
        "A calculation of the amount to claim under the insurance policy",
        "Formal closure of the incident ticket in the service desk system"
      ],
      "answer": "A",
      "explanation": "A post-incident review examines what happened, what worked and what did not, so that the organization can strengthen its controls and its incident response capability. Assigning blame discourages honest reporting and is not the review's purpose. Insurance figures and ticket closure are administrative tasks that do not improve future preparedness.",
      "topic": "Incident Management",
      "subtopic": "Post-incident review",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 4B: Incident Management Operations (post-incident review practices)"
    },
    {
      "stem": "Which of the following is the BEST way to confirm that incident response team members understand their roles without disrupting business operations?",
      "options": [
        "A full interruption test of production systems",
        "Individual reading of the incident response plan",
        "A parallel test at the alternate processing site",
        "A tabletop exercise based on a realistic scenario"
      ],
      "answer": "D",
      "explanation": "A tabletop exercise walks team members through a realistic scenario in discussion, which shows whether each person knows their responsibilities and reveals gaps in the plan without touching production systems. A full interruption test carries significant operational risk. A parallel test focuses on technical recovery capability, and reading the plan alone does not confirm understanding.",
      "topic": "Incident Management",
      "subtopic": "Testing the incident response plan",
      "difficulty": "easy",
      "source": "CISM Job Practice, Domain 4A: Incident Management Readiness (incident management training, testing and evaluation)"
    },
    {
      "stem": "A business process owner states that the process can tolerate losing no more than four hours of transaction data after a disruption. Which of the following does this requirement define?",
      "options": [
        "Recovery time objective",
        "Recovery point objective",
        "Maximum tolerable downtime",
        "Service delivery objective"
      ],
      "answer": "B",
      "explanation": "The recovery point objective is the maximum acceptable amount of data loss, measured as time back from the disruption, and it determines how often data must be backed up or replicated. The recovery time objective is how quickly the process must be restored, and maximum tolerable downtime is the longest outage the business can survive. The service delivery objective is the level of service required during the alternate processing period.",
      "topic": "Incident Management",
      "subtopic": "Recovery objectives",
      "difficulty": "medium",
      "source": "CISM Job Practice, Domain 4A: Incident Management Readiness (business continuity and disaster recovery plans; RTO and RPO)"
    },
    {
      "stem": "During an incident, the response team finds evidence that personal data of customers in several countries may have been exfiltrated, but the number of affected records has not yet been confirmed. Which of the following is the BEST course of action for the information security manager?",
      "options": [
        "Wait until forensic analysis confirms the exact records before involving anyone else",
        "Notify every customer immediately that their personal data has been stolen",
        "Escalate to senior management and legal counsel as the response plan specifies",
        "Issue a public statement to the media describing the suspected data breach"
      ],
      "answer": "C",
      "explanation": "A suspected breach of personal data across jurisdictions can trigger regulatory notification obligations with strict deadlines, so it must be escalated through the channels the incident response plan defines. Senior management and legal counsel can then decide what to disclose, to whom and when. Waiting for full forensic confirmation can cause notification deadlines to be missed, while premature notification or public statements based on unconfirmed facts can cause unnecessary harm and are not the security manager's decision alone.",
      "topic": "Incident Management",
      "subtopic": "Escalation and communication",
      "difficulty": "hard",
      "source": "CISM Job Practice, Domain 4B: Incident Management Operations (incident escalation and communication)"
    }
  ]
}
```
