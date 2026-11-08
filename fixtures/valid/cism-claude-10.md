```json
{
  "format": "domcq/1",
  "exam": "cism",
  "set": "Certified Information Security Manager (CISM) practice – Four-domain mixed set",
  "questions": [
    {
      "stem": "Which of the following is the PRIMARY goal of an information security governance framework?",
      "options": [
        "To ensure compliance with all applicable laws and regulations",
        "To align information security activities with business objectives",
        "To minimize the total cost of security controls",
        "To reduce the number of reported security incidents"
      ],
      "answer": "B",
      "explanation": "Governance exists to ensure that information security supports and enables what the business is trying to achieve, so alignment with business objectives is its primary goal. Compliance, cost efficiency and incident reduction are all desirable outcomes, but they are means or by-products rather than the purpose; a program could be compliant and cheap and still fail to protect what matters most to the enterprise.",
      "topic": "Information Security Governance",
      "subtopic": "Information Security Strategy Development",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Information Security Strategy Development"
    },
    {
      "stem": "An organization has established an information security steering committee made up of senior representatives from its major business units. Which of the following is the MOST important benefit of this committee?",
      "options": [
        "It allows the business units to approve detailed technical security standards",
        "It reduces the day-to-day workload of the information security manager",
        "It ensures that security initiatives are aligned with business priorities across the enterprise",
        "It transfers accountability for security risk from senior management to the business units"
      ],
      "answer": "C",
      "explanation": "A steering committee brings the business and security together so that security decisions, priorities and resource allocation reflect enterprise-wide business needs rather than the view of a single function. Technical standards are normally set by the security function, and accountability for risk stays with senior management regardless of the committee's existence.",
      "topic": "Information Security Governance",
      "subtopic": "Organizational Structures, Roles, and Responsibilities",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Organizational Structures, Roles, and Responsibilities"
    },
    {
      "stem": "An information security manager is preparing a business case for a data loss prevention (DLP) initiative. Which of the following would be MOST persuasive to senior management?",
      "options": [
        "A detailed description of the DLP product's technical capabilities",
        "A list of competitors that have already deployed DLP solutions",
        "A reference to an internal audit finding that recommends DLP",
        "An analysis of the business risk reduced relative to the total cost of the initiative"
      ],
      "answer": "D",
      "explanation": "Senior management makes investment decisions in business terms, so the strongest business case shows how much business risk is reduced for the money spent. Technical features, competitor behavior and audit findings may support the case, but none of them by itself demonstrates that the investment is justified for this organization.",
      "topic": "Information Security Governance",
      "subtopic": "Strategic Planning (e.g., budgets, resources, business case)",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Strategic Planning (budgets, resources, business case)"
    },
    {
      "stem": "An organization operates in several countries with differing and sometimes conflicting data protection laws. Which of the following would be the BEST approach for the information security manager?",
      "options": [
        "Establish a common baseline standard for all locations and add location-specific requirements where local laws demand more",
        "Apply the requirements of the country where the organization is headquartered to all locations",
        "Allow each location to define its own requirements independently based on its local laws",
        "Apply the most restrictive national requirements uniformly to every location regardless of local law"
      ],
      "answer": "A",
      "explanation": "A common baseline gives consistent, manageable security across the enterprise, while supplemental local requirements ensure each location also meets its own legal obligations. Applying only headquarters rules risks non-compliance elsewhere; fully independent local standards fragment the program; and imposing the most restrictive rules everywhere is costly and can itself conflict with local law, for example where one country mandates data retention that another restricts.",
      "topic": "Information Security Governance",
      "subtopic": "Legal, Regulatory, and Contractual Requirements",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 1: Information Security Governance – Legal, Regulatory, and Contractual Requirements"
    },
    {
      "stem": "An organization purchases a cyber insurance policy to cover the financial losses that would result from a data breach. Which risk treatment option does this represent?",
      "options": [
        "Risk avoidance",
        "Risk mitigation",
        "Risk transfer",
        "Risk acceptance"
      ],
      "answer": "C",
      "explanation": "Insurance shifts part of the financial consequence of a risk to another party, which is risk transfer (also called risk sharing). It does not reduce the likelihood or impact of the breach itself (mitigation), stop the activity that creates the risk (avoidance), or simply tolerate the risk without action (acceptance). Note that insurance only transfers financial loss; accountability and reputational impact remain with the organization.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Treatment/Risk Response Options",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk Treatment/Risk Response Options"
    },
    {
      "stem": "Who should be the owner of the risk associated with a business-critical application?",
      "options": [
        "The business process owner who relies on the application",
        "The information security manager",
        "The IT operations manager responsible for the application's infrastructure",
        "The internal audit manager"
      ],
      "answer": "A",
      "explanation": "Risk ownership belongs with the person who is accountable for the business outcomes the risk could affect and who has the authority to decide how to treat it, which is the business process owner. The security manager advises and facilitates, IT operations acts as custodian of the technology, and internal audit must remain independent of the risk decisions it reviews.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk and Control Ownership",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk and Control Ownership"
    },
    {
      "stem": "A vulnerability scan of the production environment has returned several hundred findings. Which of the following is the BEST basis for prioritizing remediation?",
      "options": [
        "The order in which the scanning tool lists the findings",
        "The business criticality of the affected assets combined with the likelihood of exploitation",
        "The amount of effort required to remediate each finding",
        "The severity score assigned by the scanning tool alone"
      ],
      "answer": "B",
      "explanation": "Remediation should be driven by risk, which means combining how important the affected asset is to the business with how likely the vulnerability is to be exploited in the organization's actual environment. A tool's generic severity score ignores asset value and compensating controls, while remediation effort and list order say nothing about the risk being reduced.",
      "topic": "Information Security Risk Management",
      "subtopic": "Vulnerability and Control Deficiency Analysis",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Vulnerability and Control Deficiency Analysis"
    },
    {
      "stem": "After implementing all controls that were cost-justified, the residual risk for a critical customer-facing system remains above the organization's risk appetite. The head of the business unit wants to continue operating the system. What should the information security manager do NEXT?",
      "options": [
        "Accept the residual risk on behalf of the organization because no further controls are cost-justified",
        "Instruct the business unit to suspend the system until the residual risk is within appetite",
        "Record the risk in the risk register and take no further action",
        "Escalate the residual risk to senior management for a formal decision on acceptance or additional treatment"
      ],
      "answer": "D",
      "explanation": "Risk that exceeds the approved appetite can only be accepted by management with the authority to do so, which is neither the security manager nor, on its own, a business unit head. Escalating with the options and their costs lets senior management decide to accept the risk, fund further treatment or change the activity. Recording the risk without a decision leaves the organization outside its appetite, and unilaterally suspending a critical system exceeds the security manager's authority.",
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Treatment/Risk Response Options",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 2: Information Security Risk Management – Risk Treatment/Risk Response Options (residual risk and risk acceptance)"
    },
    {
      "stem": "Which of the following documents would specify the mandatory minimum security configuration for all database servers?",
      "options": [
        "An information security policy",
        "An information security standard",
        "An information security guideline",
        "An information security procedure"
      ],
      "answer": "B",
      "explanation": "Standards translate policy intent into specific, mandatory requirements such as configuration baselines for a technology. Policies state management's high-level direction, procedures give step-by-step instructions for performing a task, and guidelines are recommended but optional practices.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Policies, Standards, Procedures, and Guidelines",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Policies, Standards, Procedures, and Guidelines"
    },
    {
      "stem": "Who is responsible for determining the classification level of a set of business records?",
      "options": [
        "The information security manager",
        "The database administrator",
        "The data custodian",
        "The information owner"
      ],
      "answer": "D",
      "explanation": "The information owner understands the business value and sensitivity of the information and is accountable for it, so the owner decides its classification. The security manager defines the classification scheme and criteria, while custodians and administrators apply the protections appropriate to the level the owner has assigned.",
      "topic": "Information Security Program",
      "subtopic": "Information Asset Identification and Classification",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Asset Identification and Classification"
    },
    {
      "stem": "Which of the following is the BEST indicator that a security awareness program is effective?",
      "options": [
        "The percentage of employees who have completed the annual training module",
        "The number of awareness sessions delivered during the year",
        "A sustained reduction in security incidents caused by employee behavior",
        "The average score achieved on the post-training knowledge quiz"
      ],
      "answer": "C",
      "explanation": "The purpose of awareness training is to change behavior, so the best evidence of effectiveness is an outcome measure showing that people are actually behaving more securely. Completion rates and session counts measure activity rather than results, and quiz scores show knowledge at a point in time rather than whether that knowledge is applied on the job.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Awareness and Training",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Awareness and Training"
    },
    {
      "stem": "An organization is about to engage a cloud service provider to process customer data. Which of the following would BEST ensure that the provider meets the organization's security requirements on an ongoing basis?",
      "options": [
        "Reviewing the provider's published security white paper before signing",
        "Including specific security requirements and a right to audit in the contract",
        "Requiring the provider to hold a cyber insurance policy",
        "Conducting a single on-site assessment prior to contract signature"
      ],
      "answer": "B",
      "explanation": "The contract is the primary mechanism for governing a third party: it makes the security requirements enforceable and the right to audit allows the organization to verify compliance throughout the relationship. White papers and one-time assessments only describe the situation at a point in time, and insurance addresses financial consequences rather than whether controls are in place.",
      "topic": "Information Security Program",
      "subtopic": "Management of External Services (e.g., suppliers, third parties, nth parties)",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Management of External Services"
    },
    {
      "stem": "Which of the following metrics would be MOST meaningful to senior management when evaluating the information security program?",
      "options": [
        "The trend in residual risk to critical business processes compared with the approved risk appetite",
        "The number of firewall rule changes implemented each month",
        "The number of malware signatures updated on endpoint protection systems",
        "The number of vulnerabilities detected by the monthly network scan"
      ],
      "answer": "A",
      "explanation": "Senior management needs metrics expressed in business terms that show whether the program is achieving its purpose, and the trend of residual risk against appetite does exactly that. Firewall changes, signature updates and raw vulnerability counts are operational measures that are useful to the security team but do not tell executives whether the business is adequately protected.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Program Metrics Development",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Program Metrics Development"
    },
    {
      "stem": "A newly implemented control is causing significant delays in a critical business process, and the business unit is asking for it to be removed. Which of the following would be the BEST approach for the information security manager?",
      "options": [
        "Remove the control, because business operations take priority over security requirements",
        "Retain the control unchanged, because it was approved as part of the security program",
        "Ask the business unit to formally accept the risk of operating without the control",
        "Evaluate alternative controls that meet the same control objective with less impact on the process"
      ],
      "answer": "D",
      "explanation": "Controls exist to achieve a control objective, not for their own sake, so when a control conflicts with business operations the right response is to look for another way of meeting the objective that the business can live with. Simply removing the control leaves the risk untreated, rigidly retaining it damages the business and undermines support for security, and pushing the business toward risk acceptance should only follow once viable alternatives have been examined.",
      "topic": "Information Security Program",
      "subtopic": "Information Security Control Design and Selection",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 3: Information Security Program – Information Security Control Design and Selection"
    },
    {
      "stem": "Which of the following is the PRIMARY purpose of a business impact analysis (BIA)?",
      "options": [
        "To identify the threats most likely to cause a disruption to operations",
        "To determine the criticality of business processes and the impact of their disruption over time",
        "To select the recovery site strategy for the organization's data center",
        "To test whether recovery procedures can be completed within the required time"
      ],
      "answer": "B",
      "explanation": "A BIA establishes which business processes are most critical and how the impact of losing them grows over time, which is what drives recovery priorities and objectives such as RTO and RPO. Threat identification belongs to risk assessment, recovery strategy selection comes after the BIA and depends on its results, and testing validates plans that have already been built.",
      "topic": "Incident Management",
      "subtopic": "Business Impact Analysis (BIA)",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 4: Incident Management – Business Impact Analysis (BIA)"
    },
    {
      "stem": "Which of the following BEST describes the recovery point objective (RPO)?",
      "options": [
        "The maximum time a system may be unavailable before unacceptable consequences occur",
        "The time required to restore a system to full operation at an alternate site",
        "The minimum level of service that must be provided during a disruption",
        "The maximum amount of data loss, measured in time, that the organization can tolerate"
      ],
      "answer": "D",
      "explanation": "The RPO defines how far back in time the organization can afford to lose data, and therefore how frequently backups or replication must occur. The maximum tolerable downtime and the time to restore relate to the recovery time objective and related measures, while the minimum acceptable service level is a separate continuity parameter.",
      "topic": "Incident Management",
      "subtopic": "Disaster Recovery Plan (DRP)",
      "difficulty": "easy",
      "source": "CISM Review Manual, Domain 4: Incident Management – Disaster Recovery Plan (DRP), recovery objectives"
    },
    {
      "stem": "An intrusion detection system has generated an alert indicating that a workstation is communicating with a known command-and-control server. Which of the following should the incident response team do FIRST?",
      "options": [
        "Validate the alert and determine the scope of the suspected compromise",
        "Reimage the workstation and return it to the user",
        "Notify law enforcement of a suspected intrusion",
        "Update the intrusion detection signatures to block the connection"
      ],
      "answer": "A",
      "explanation": "Detection alerts must be triaged before action is taken: the team needs to confirm that the alert is genuine and understand how far the compromise extends so that containment and later steps address the real problem. Reimaging immediately destroys evidence and may miss other affected systems, law enforcement notification is premature before an incident is confirmed, and changing detection signatures neither confirms nor contains the compromise.",
      "topic": "Incident Management",
      "subtopic": "Incident Investigation and Evaluation",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Investigation and Evaluation (triage and validation)"
    },
    {
      "stem": "Ransomware has been confirmed on several file servers and is actively encrypting data across the network. Which of the following is the MOST appropriate immediate containment action?",
      "options": [
        "Begin restoring the affected servers from the most recent backups",
        "Contact the attackers to negotiate payment and obtain a decryption key",
        "Isolate the affected systems and network segments to stop further spread",
        "Conduct a full forensic analysis of the affected servers to identify the entry point"
      ],
      "answer": "C",
      "explanation": "Containment aims to limit the damage of a confirmed incident, and with actively spreading ransomware that means cutting off the affected systems and segments so the infection cannot reach further assets. Restoration belongs to the recovery phase and would be undone if the malware is still active, forensic analysis is part of investigation and eradication rather than immediate containment, and paying the attackers does nothing to stop the spread.",
      "topic": "Incident Management",
      "subtopic": "Incident Containment Methods",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Containment Methods"
    },
    {
      "stem": "Which of the following is the PRIMARY purpose of a post-incident review?",
      "options": [
        "To identify lessons learned and improve the incident response process",
        "To determine which individuals were responsible for causing the incident",
        "To calculate the financial penalty to be applied to the responsible business unit",
        "To produce the evidence package required for any legal proceedings"
      ],
      "answer": "A",
      "explanation": "The post-incident review is a learning exercise: it examines what happened, how well the response worked and what should change in controls, plans and procedures to prevent recurrence or respond better next time. Focusing on blame or penalties discourages honest participation and undermines the review, and evidence collection for legal purposes is handled during the investigation, not in the review.",
      "topic": "Incident Management",
      "subtopic": "Post-incident Review Practices",
      "difficulty": "medium",
      "source": "CISM Review Manual, Domain 4: Incident Management – Post-incident Review Practices"
    },
    {
      "stem": "An organization has discovered a breach involving personal data of customers in a jurisdiction that requires the regulator to be notified within 72 hours of the organization becoming aware of a breach. The investigation is still ongoing and the full extent of the breach is not yet known. Which of the following would be the BEST approach for the information security manager?",
      "options": [
        "Delay notification until the investigation has determined the full extent of the breach",
        "Notify the regulator only if the investigation confirms that a significant number of records were affected",
        "Work with legal counsel to notify the regulator within the deadline using the facts known, and provide updates as the investigation continues",
        "Notify the affected customers immediately and inform the regulator once the investigation is complete"
      ],
      "answer": "C",
      "explanation": "Regulatory notification deadlines run from awareness of the breach, not from completion of the investigation, so waiting for full details risks a compliance failure on top of the breach. Notification regimes of this kind generally allow an initial notice based on known facts followed by supplementary information, and legal counsel should be involved to ensure the notification meets the requirements. Thresholds based on record counts are not the organization's to decide unilaterally, and informing customers before the regulator does not satisfy the regulatory obligation.",
      "topic": "Incident Management",
      "subtopic": "Incident Response Communications (e.g., reporting, notification, escalation)",
      "difficulty": "hard",
      "source": "CISM Review Manual, Domain 4: Incident Management – Incident Response Communications (reporting, notification, escalation)"
    }
  ]
}
```
