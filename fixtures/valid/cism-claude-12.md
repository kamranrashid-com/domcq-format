```json
{
  "format": "domcq/1",
  "exam": "cism",
  "set": "Certified Information Security Manager (CISM) practice – Mixed domains set 12",
  "questions": [
    {
      "stem": "Which of the following is the PRIMARY responsibility of an information security steering committee?",
      "options": [
        "Approving technical hardening standards for servers and network devices",
        "Ensuring that information security initiatives are aligned with business objectives",
        "Performing periodic risk assessments of individual business units",
        "Reviewing firewall rule changes for compliance with the security policy"
      ],
      "answer": "B",
      "explanation": "A steering committee is a governance body made up of senior business and IT stakeholders. Its role is to set direction and priorities so that the security program supports what the business is trying to achieve, and to resolve conflicts between business needs and security requirements. Technical standards, risk assessments and rule reviews are operational tasks performed by the security function and IT, not by the committee.",
      "rationales": {
        "A": "Technical standards are developed and approved within the security and IT functions, not at steering committee level.",
        "B": "Correct: the committee provides strategic direction and ensures security efforts support business objectives.",
        "C": "Risk assessments are performed by the security function with business input; the committee reviews results, not performs them.",
        "D": "Firewall rule review is an operational control activity, far below the committee's governance remit."
      },
      "topic": "Information Security Governance",
      "subtopic": "Organizational Structures, Roles, and Responsibilities",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Organizational Structures, Roles and Responsibilities (steering committee)"
    },
    {
      "stem": "An information security manager is preparing a business case for a data loss prevention (DLP) solution. Which of the following would BEST support approval of the business case by senior management?",
      "options": [
        "A detailed description of the technical features of the proposed DLP product",
        "Statistics on data breaches experienced by peer organizations in the industry",
        "The expected reduction in risk to the business compared with the total cost of the solution",
        "An independent evaluation of the product published by the vendor's partners"
      ],
      "answer": "C",
      "explanation": "Senior management approves investments based on business value. A business case should show how the initiative reduces risk to business objectives and whether that benefit justifies the total cost of ownership. Technical features, peer statistics and product evaluations may support the argument but do not by themselves demonstrate value to this organization.",
      "rationales": {
        "A": "Management is not persuaded by technical features; features matter only insofar as they reduce risk.",
        "B": "Peer breach statistics provide context but do not show the value of the control to this organization.",
        "C": "Correct: a cost-benefit view expressed as risk reduction versus cost is the core of a sound business case.",
        "D": "Vendor-associated evaluations are not independent and do not address the organization's own risk."
      },
      "topic": "Information Security Governance",
      "subtopic": "Strategic Planning (e.g., budgets, resources, business case)",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Strategic Planning; developing a business case"
    },
    {
      "stem": "An organization operates in several countries whose data privacy laws impose different and sometimes conflicting requirements. Which of the following is the BEST approach for the information security manager?",
      "options": [
        "Establish a common baseline that meets the most stringent requirements and manage documented local exceptions",
        "Apply the privacy requirements of the country where headquarters is located to all other locations",
        "Allow each regional office to define and operate its own privacy controls independently",
        "Obtain a legal opinion that exempts the organization from the requirements of the less strict jurisdictions"
      ],
      "answer": "A",
      "explanation": "A single baseline built on the most stringent applicable requirements ensures the organization is compliant everywhere while keeping the program manageable and consistent. Where a local law genuinely conflicts with the baseline, a documented exception process handles it. Applying only the home-country rules or leaving each region to itself leads to gaps or inconsistency, and a legal opinion cannot remove a legal obligation.",
      "rationales": {
        "A": "Correct: a stringent common baseline with managed exceptions delivers consistent compliance across jurisdictions.",
        "B": "Headquarters' law may be less strict than local laws, leaving the organization non-compliant in other countries.",
        "C": "Independent regional controls create inconsistency and make enterprise-wide assurance difficult.",
        "D": "A legal opinion does not exempt an organization from laws that apply to its operations."
      },
      "topic": "Information Security Governance",
      "subtopic": "Legal, Regulatory, and Contractual Requirements",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Legal, Regulatory and Contractual Requirements"
    },
    {
      "stem": "The board of directors has approved a risk appetite statement that expresses the level of loss the organization is willing to tolerate in financial terms. Which of the following is the MOST important action for the information security manager to take to make the statement operational for the security program?",
      "options": [
        "Publish the risk appetite statement in the information security policy and on the intranet",
        "Increase the frequency of vulnerability scanning on all internet-facing systems",
        "Require all business units to purchase cyber insurance covering the stated loss amount",
        "Translate the appetite into risk tolerance thresholds and key risk indicators for information security risk"
      ],
      "answer": "D",
      "explanation": "A risk appetite statement is a high-level expression of acceptable loss. To be useful it must be decomposed into measurable tolerance thresholds for specific categories of information risk and into indicators that show when those thresholds are approached. This allows risk decisions and monitoring to be tied back to what the board actually approved. Publishing the statement, scanning more often or buying insurance do not by themselves connect day-to-day security risk management to the appetite.",
      "rationales": {
        "A": "Communicating the statement is useful but does not make it measurable or actionable.",
        "B": "More frequent scanning is an operational control choice, not a way of operationalizing appetite.",
        "C": "Insurance is one treatment option; it does not define how risk is measured against appetite.",
        "D": "Correct: tolerances and KRIs convert the appetite into criteria that guide and monitor security risk decisions."
      },
      "topic": "Information Security Governance",
      "subtopic": "Information Security Strategy Development",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – risk appetite, risk tolerance and strategy objectives"
    },
    {
      "stem": "An organization decides to discontinue an online customer service because the cost of adequately securing it would exceed the revenue the service generates. Which risk treatment option does this decision represent?",
      "options": [
        "Risk mitigation through control implementation",
        "Risk transfer to a third party",
        "Risk avoidance by eliminating the activity",
        "Risk acceptance by senior management"
      ],
      "answer": "C",
      "explanation": "Risk avoidance means ceasing or not undertaking the activity that gives rise to the risk, so that the risk no longer exists. Withdrawing the service entirely removes the exposure rather than reducing it, sharing it or living with it. The other options describe treatments that leave the activity in place.",
      "rationales": {
        "A": "Mitigation would reduce the risk with controls while keeping the service running.",
        "B": "Transfer would shift the financial consequence, for example through insurance or outsourcing.",
        "C": "Correct: stopping the activity eliminates the risk, which is the definition of avoidance.",
        "D": "Acceptance would keep the service operating with its risk knowingly tolerated."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Treatment/Risk Response Options",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk Treatment / Risk Response Options"
    },
    {
      "stem": "While conducting a risk assessment, an information security manager finds that reliable historical data on the frequency of a particular threat is not available. Which of the following is the BEST approach?",
      "options": [
        "Postpone the assessment of that threat until sufficient historical data has been collected",
        "Use a qualitative approach based on expert judgment and clearly document the assumptions made",
        "Assign the highest possible likelihood rating to the threat to remain conservative",
        "Exclude the threat from the scope of the assessment because it cannot be quantified"
      ],
      "answer": "B",
      "explanation": "When quantitative data is lacking, a qualitative or semi-quantitative method using the judgment of knowledgeable people is the accepted way to estimate likelihood. Recording the assumptions makes the result transparent and allows it to be revisited as data becomes available. Postponing or excluding the threat leaves a gap in the risk picture, and automatically rating it highest distorts prioritization.",
      "rationales": {
        "A": "Delaying leaves management without any view of the risk in the meantime.",
        "B": "Correct: qualitative expert estimation with documented assumptions is appropriate when data is scarce.",
        "C": "Inflating likelihood without basis misallocates resources and undermines the credibility of the assessment.",
        "D": "Excluding a known threat produces an incomplete and misleading assessment."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Assessment and Analysis",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk Assessment and Analysis (qualitative vs. quantitative methods)"
    },
    {
      "stem": "A risk assessment has identified a significant risk to an organization's customer billing application. Who should be accountable for deciding how this risk is treated?",
      "options": [
        "The information security manager who performed the assessment",
        "The IT operations manager who maintains the application",
        "The director of internal audit who reviews the risk register",
        "The business owner of the customer billing application"
      ],
      "answer": "D",
      "explanation": "Risk ownership rests with the business, because the business owner is accountable for the process the asset supports and for the consequences if it fails. The information security manager advises on options and facilitates the decision, IT operations implements the chosen controls as custodian, and internal audit provides independent assurance. None of these should make the treatment decision on the owner's behalf.",
      "rationales": {
        "A": "The security manager advises and facilitates but should not own business risk decisions.",
        "B": "IT operations is the custodian that implements controls; it does not own the business risk.",
        "C": "Internal audit must stay independent and cannot make management decisions about risk.",
        "D": "Correct: the business owner bears the consequences and is therefore accountable for the treatment decision."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk and Control Ownership",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk and Control Ownership"
    },
    {
      "stem": "After controls have been implemented, the residual risk associated with a system still exceeds the organization's defined risk tolerance. The head of the business unit that owns the system states that the unit will accept the remaining risk. Which of the following is the BEST course of action for the information security manager?",
      "options": [
        "Escalate the decision to senior management because acceptance above tolerance exceeds the business unit's authority",
        "Record the acceptance as final because the business unit head is the owner of the system",
        "Implement additional controls on the system without further consulting the business unit",
        "Document the acceptance and remove the risk from the risk register as treated"
      ],
      "answer": "A",
      "explanation": "Risk tolerance is set by senior management or the board, and a decision to operate above it is not within the authority of an individual business unit. The security manager should make sure the decision is taken at the appropriate level, with the exposure clearly explained, rather than either overriding the owner or quietly accepting a breach of tolerance. Accepted risk also remains on the register for monitoring.",
      "rationales": {
        "A": "Correct: exceeding defined tolerance requires approval at the level that set the tolerance.",
        "B": "Owners can accept risk only within their delegated authority, which does not extend above tolerance.",
        "C": "Imposing controls unilaterally bypasses risk ownership and governance.",
        "D": "Accepted risks stay on the register so they continue to be monitored and reviewed."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Treatment/Risk Response Options",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – risk acceptance, risk tolerance and escalation"
    },
    {
      "stem": "Which of the following types of document specifies mandatory, measurable requirements, such as a minimum password length, in support of an information security policy?",
      "options": [
        "A guideline recommending good practice",
        "A procedure describing step-by-step tasks",
        "A standard defining required settings",
        "A policy stating management intent"
      ],
      "answer": "C",
      "explanation": "In the policy hierarchy, policies state high-level management intent, standards translate that intent into specific mandatory requirements, procedures describe how to carry out tasks, and guidelines offer optional recommendations. A minimum password length is a precise, mandatory parameter, which places it in a standard.",
      "rationales": {
        "A": "Guidelines are discretionary recommendations, not mandatory requirements.",
        "B": "Procedures give the sequence of steps to perform a task, not the required parameter values.",
        "C": "Correct: standards contain specific mandatory requirements that implement the policy.",
        "D": "Policies express intent and direction at a high level and avoid technical specifics."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Policies, Standards, Procedures, and Guidelines",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Policies, Standards, Procedures and Guidelines"
    },
    {
      "stem": "Which of the following BEST indicates that an organization's security awareness program is effective?",
      "options": [
        "A sustained decrease in the proportion of employees who click on simulated phishing emails",
        "A high percentage of employees who have completed the annual awareness training module",
        "An increase in the number of awareness sessions delivered during the year",
        "Positive satisfaction scores from employees who attended the awareness sessions"
      ],
      "answer": "A",
      "explanation": "The purpose of awareness training is to change behavior. A metric that measures actual behavior, such as a falling rate of clicks in phishing simulations over time, shows whether that purpose is being achieved. Completion rates, session counts and satisfaction scores measure activity or opinion, not whether people act more securely.",
      "rationales": {
        "A": "Correct: reduced susceptibility to simulated attacks is an outcome measure of changed behavior.",
        "B": "Completion shows participation, not whether anything was learned or applied.",
        "C": "More sessions is an input measure and says nothing about effectiveness.",
        "D": "Satisfaction indicates the training was well received, not that behavior improved."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Awareness and Training",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Awareness and Training; measuring program effectiveness"
    },
    {
      "stem": "An organization is outsourcing its payroll processing to a cloud service provider that will store employee personal data. From an information security perspective, which of the following is the MOST important provision to include in the contract?",
      "options": [
        "A description of the geographic locations of the provider's data centers",
        "An organizational chart of the provider's information security staff",
        "A commitment by the provider to deploy the latest security technologies",
        "The right to audit the provider or to receive independent assurance of its controls"
      ],
      "answer": "D",
      "explanation": "Outsourcing transfers the processing but not the accountability for protecting the data. The organization therefore needs a contractual means of verifying that the provider's controls are in place and operating, either through its own audits or through independent reports such as SOC 2. Without this, other promises in the contract cannot be validated.",
      "rationales": {
        "A": "Data location matters for legal reasons but does not provide assurance that controls work.",
        "B": "Knowing who is on the security team gives no evidence of control effectiveness.",
        "C": "A vague promise about technology is unverifiable and not tied to the organization's requirements.",
        "D": "Correct: audit rights or independent assurance let the organization verify the provider's security."
      },
      "topic": "Information Security Program",
      "subtopic": "Management of External Services (e.g., suppliers, third parties, nth parties)",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Management of External Services; third-party contracts and assurance"
    },
    {
      "stem": "Which of the following is an example of a detective control?",
      "options": [
        "Encryption of sensitive data stored on laptops",
        "Regular review of system audit logs for anomalies",
        "Role-based access control on the finance application",
        "Mandatory security awareness training for new staff"
      ],
      "answer": "B",
      "explanation": "Controls are commonly classified by when they act. Preventive controls stop an event from occurring, detective controls identify that an event has occurred or is occurring, and corrective controls restore the situation afterwards. Reviewing audit logs does not stop anything from happening; it reveals that something has happened so it can be acted on, making it detective.",
      "rationales": {
        "A": "Encryption prevents unauthorized disclosure, so it is a preventive control.",
        "B": "Correct: log review identifies events after they occur, which is the hallmark of a detective control.",
        "C": "Access control prevents unauthorized actions and is therefore preventive.",
        "D": "Awareness training is a preventive, administrative control."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Control Design and Selection",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Control Design and Selection; control categories"
    },
    {
      "stem": "An information security manager is selecting metrics to report to senior management on the performance of the information security program. Which of the following metrics would be MOST useful to them?",
      "options": [
        "The number of vulnerabilities remediated by the IT department during the quarter",
        "The percentage of employees who completed the mandatory awareness training",
        "The extent to which defined security objectives supporting business goals have been achieved",
        "The number of intrusion attempts blocked by the perimeter firewalls each month"
      ],
      "answer": "C",
      "explanation": "Senior management needs to know whether the program is delivering what the business requires of it. Metrics should therefore be tied to the program's objectives, which in turn derive from business goals, and should show progress toward them. Counts of vulnerabilities, training completions or blocked attempts are operational measures that are useful to the security team but do not tell management whether objectives are being met.",
      "rationales": {
        "A": "Remediation counts are operational and have no clear link to business outcomes.",
        "B": "Training completion is an activity metric, not a measure of program achievement.",
        "C": "Correct: achievement of objectives aligned to business goals is what management needs to judge the program.",
        "D": "Blocked attempts are technical noise for management and do not indicate effectiveness."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Program Metrics, Communications, and Reporting",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Metrics, Communications and Reporting; metrics for senior management"
    },
    {
      "stem": "An information security manager learns that a business unit has started using a software-as-a-service (SaaS) application to share customer documents without involving the information security function. Which of the following should the information security manager do FIRST?",
      "options": [
        "Assess the risk associated with the use of the application",
        "Instruct the business unit to stop using the application immediately",
        "Report the policy violation to senior management",
        "Update the acceptable use policy to prohibit SaaS applications"
      ],
      "answer": "A",
      "explanation": "Before taking action, the security manager needs to understand what data is involved, what controls the service provides and what the actual exposure is. The appropriate response, whether that is formalizing the service, adding controls, escalating or stopping use, depends on the result of that assessment. Acting without understanding the risk may either disrupt the business unnecessarily or leave real exposure unaddressed.",
      "rationales": {
        "A": "Correct: understanding the risk is the necessary basis for choosing any further action.",
        "B": "Stopping use may be warranted later, but doing so before assessing the risk may harm the business needlessly.",
        "C": "Escalation should be informed by an assessment of the actual risk, not precede it.",
        "D": "A blanket prohibition is a policy decision that should follow analysis, not be the first reaction."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Control Implementation and Integrations",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – integrating security into business processes; shadow IT"
    },
    {
      "stem": "Which of the following is the BEST way to ensure that regulatory breach notification deadlines are met following a security incident?",
      "options": [
        "Notify the relevant regulators of every security event as soon as it is detected",
        "Rely on legal counsel to determine the applicable deadlines once an incident has occurred",
        "Describe the notification obligations in the organization's annual compliance report",
        "Define notification criteria, responsibilities and timelines in advance within the incident response plan"
      ],
      "answer": "D",
      "explanation": "Breach notification windows are often short and the hours after an incident are chaotic. The reliable way to meet them is to work out beforehand which incidents trigger notification, who decides, who communicates and by when, and to build this into the incident response plan and its exercises. Determining obligations only after the fact wastes time, and notifying every event would be inaccurate and counterproductive.",
      "rationales": {
        "A": "Notifying every event, including minor ones, is unnecessary and may breach accuracy requirements.",
        "B": "Working out deadlines during an incident consumes time that may already be running out.",
        "C": "An annual report records obligations but provides no mechanism to act on them during an incident.",
        "D": "Correct: predefined criteria, roles and timelines in the plan make timely notification repeatable."
      },
      "topic": "Incident Management",
      "subtopic": "Incident Response Communications (e.g., reporting, notification, escalation)",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Response Communications; regulatory notification"
    },
    {
      "stem": "Which of the following is the PRIMARY output of a business impact analysis (BIA)?",
      "options": [
        "An inventory of threats and vulnerabilities affecting critical systems",
        "Recovery priorities and recovery time objectives for critical business processes",
        "A detailed set of technical recovery procedures for the data center",
        "An estimate of the cost of establishing an alternate processing site"
      ],
      "answer": "B",
      "explanation": "A BIA identifies the organization's critical business processes, the impact over time if they are interrupted, and the resources they depend on. From this it derives recovery priorities and objectives such as RTO and RPO, which then drive the design of continuity and recovery plans. Threat inventories come from risk assessment, and recovery procedures and site costs are outputs of later planning stages.",
      "rationales": {
        "A": "Threats and vulnerabilities are identified in risk assessment, not in the BIA.",
        "B": "Correct: the BIA establishes which processes matter most and how quickly they must be recovered.",
        "C": "Technical recovery procedures are written in the DRP using the BIA's results as input.",
        "D": "Site costs are estimated when selecting recovery strategies after the BIA."
      },
      "topic": "Incident Management",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 4: Incident Management – Business Impact Analysis"
    },
    {
      "stem": "A ransomware infection has been detected on several workstations in the finance department and appears to be spreading to other systems on the same network segment. Which of the following should be the FIRST action of the incident response team?",
      "options": [
        "Isolate the affected network segment to prevent further spread",
        "Restore the affected workstations from the most recent backups",
        "Determine the initial infection vector used by the malware",
        "Notify law enforcement and the organization's cyber insurer"
      ],
      "answer": "A",
      "explanation": "When an incident is actively spreading, containment comes first: limiting the damage takes precedence over investigation, recovery and external notification. Isolating the segment stops the malware from reaching more systems and preserves the option to investigate and recover in a controlled way. Restoring systems before containment risks reinfection, and root cause analysis and notifications follow once the spread is stopped.",
      "rationales": {
        "A": "Correct: containing an active, spreading incident is the immediate priority.",
        "B": "Restoring before containment is likely to result in the restored systems being reinfected.",
        "C": "Identifying the vector is part of investigation and eradication, which follow containment.",
        "D": "External notification is important but does not stop the ongoing damage."
      },
      "topic": "Incident Management",
      "subtopic": "Incident Containment Methods",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Containment Methods; incident response phases"
    },
    {
      "stem": "An organization's disaster recovery plan specifies a recovery point objective (RPO) of four hours for its order processing system, but the system's data is backed up only once per day. Which of the following BEST describes this situation?",
      "options": [
        "The recovery time objective (RTO) of the system cannot be achieved with daily backups",
        "The RPO is unrealistically aggressive and should be relaxed to match the backup schedule",
        "The backup strategy does not support the RPO and must be aligned with the business requirement",
        "The order processing system should be reclassified as a non-critical system"
      ],
      "answer": "C",
      "explanation": "The RPO expresses the maximum amount of data loss, measured in time, that the business can tolerate; it is a business requirement derived from the BIA. With daily backups, up to 24 hours of transactions could be lost, which is six times the stated tolerance. The technical strategy must therefore be changed, for example through more frequent backups or replication; adjusting the requirement to fit the technology or downgrading the system's criticality would invert the proper relationship.",
      "rationales": {
        "A": "RTO concerns how quickly service is restored, not how much data may be lost; the issue here is RPO.",
        "B": "Business requirements drive recovery strategies, not the other way around.",
        "C": "Correct: the backup frequency fails to meet the business-defined RPO and must be brought into line.",
        "D": "Criticality is determined by business impact, not by the convenience of the current backup schedule."
      },
      "topic": "Incident Management",
      "subtopic": "Disaster Recovery Plan (DRP)",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 4: Incident Management – Disaster Recovery Plan; recovery objectives (RTO, RPO)"
    },
    {
      "stem": "Following the resolution of a major security incident, which of the following is the MOST important objective of the post-incident review?",
      "options": [
        "Assigning accountability to the individuals whose actions led to the incident",
        "Producing documentation of the incident to support an insurance claim",
        "Confirming that all affected systems have been fully restored to service",
        "Identifying lessons learned to improve controls and the incident response process"
      ],
      "answer": "D",
      "explanation": "The post-incident review closes the incident management cycle by examining what happened, how well the response worked and what should change. Its value lies in feeding improvements back into controls, detection, the response plan and training so that similar incidents are less likely or less damaging. A blame-oriented review discourages candor, and system restoration is verified during recovery rather than in the review.",
      "rationales": {
        "A": "Focusing on blame discourages honest reporting and does not improve future response.",
        "B": "Insurance documentation may be a by-product but is not the review's purpose.",
        "C": "Restoration is confirmed during the recovery phase, before the review takes place.",
        "D": "Correct: lessons learned drive improvement of controls and the response capability."
      },
      "topic": "Incident Management",
      "subtopic": "Post-incident Review Practices",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Post-incident Review Practices"
    },
    {
      "stem": "Which of the following is the PRIMARY purpose of classifying security incidents by severity level?",
      "options": [
        "To determine the disciplinary action for the employee who caused the incident",
        "To ensure that response effort and escalation are proportionate to the potential impact",
        "To satisfy the documentation requirements of the external auditors",
        "To calculate the annual loss expectancy for the organization's risk register"
      ],
      "answer": "B",
      "explanation": "Severity classification allows an organization to respond consistently and in proportion to the harm an incident could cause. It determines how quickly the response must begin, which resources are mobilized and who must be informed, so that major incidents get senior attention while minor ones are handled routinely. Disciplinary matters, audit documentation and loss calculations may use the information but are not the reason for classifying.",
      "rationales": {
        "A": "Severity describes impact on the organization, not culpability of individuals.",
        "B": "Correct: classification drives proportionate response priority, resourcing and escalation.",
        "C": "Auditors may review classifications, but satisfying them is not the primary purpose.",
        "D": "Loss expectancy is a risk analysis calculation, not the purpose of incident classification."
      },
      "topic": "Incident Management",
      "subtopic": "Incident Classification/Categorization",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Classification/Categorization"
    }
  ]
}
```
