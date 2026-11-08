```json
{
  "format": "domcq/1",
  "exam": "cism",
  "set": "Certified Information Security Manager (CISM) practice – Four-domain mixed set",
  "questions": [
    {
      "stem": "Which of the following is the PRIMARY objective of information security governance?",
      "options": [
        "Implementing every available control to the highest standard",
        "Aligning security activities with business objectives",
        "Reducing the number of security incidents to zero",
        "Achieving certification against a recognized standard"
      ],
      "answer": "B",
      "explanation": "Governance exists to give strategic direction so that security supports and enables what the business is trying to achieve. CISM treats strategic alignment as the core outcome of governance; controls, incident reduction and certifications are means that only add value when they serve business objectives and risk appetite.",
      "rationales": {
        "A": "Maximal controls ignore cost and risk appetite and can hinder the business; governance seeks appropriate, not maximal, protection.",
        "B": "Correct: governance provides direction so that security investment and activity support the organization's goals.",
        "C": "Zero incidents is unrealistic; governance aims to keep risk within acceptable levels, not eliminate it.",
        "D": "Certification can be a useful outcome, but it is not the primary purpose of governance."
      },
      "topic": "Information Security Governance",
      "subtopic": "Enterprise Governance",
      "difficulty": "easy",
      "source": "CISM Domain 1A: Enterprise Governance – strategic alignment as an outcome of information security governance"
    },
    {
      "stem": "A newly appointed information security manager has been asked to develop an information security strategy. Which of the following should the information security manager do FIRST?",
      "options": [
        "Select a control framework such as ISO/IEC 27001",
        "Perform a gap analysis against existing controls",
        "Draft a new organization-wide security policy",
        "Understand the organization's business goals"
      ],
      "answer": "D",
      "explanation": "A security strategy must define a desired future state that supports the business, so it starts with understanding the organization's goals, priorities and risk appetite. Only once the desired state is known can a gap analysis be meaningful, a framework be chosen or policy be written to direct the program.",
      "rationales": {
        "A": "A framework is chosen to help reach the desired state; selecting one before knowing business goals risks a poor fit.",
        "B": "A gap analysis needs a defined desired state, which comes from the business goals, so it cannot come first.",
        "C": "Policy expresses management intent derived from strategy; writing it first puts the output before the input.",
        "D": "Correct: business goals define the desired state that the security strategy must support."
      },
      "topic": "Information Security Governance",
      "subtopic": "Information Security Strategy",
      "difficulty": "medium",
      "source": "CISM Domain 1B: Information Security Strategy – strategy development and defining the desired state"
    },
    {
      "stem": "Senior management has repeatedly declined to fund proposed information security initiatives. Which of the following would be the BEST approach of the information security manager to gain their commitment?",
      "options": [
        "Present security risk in terms of its impact on business objectives",
        "Report the number of attacks blocked by perimeter defenses",
        "Benchmark the security budget against peer organizations",
        "Cite recent security breaches reported in the news media"
      ],
      "answer": "A",
      "explanation": "Senior managers make decisions in business terms, so security needs are most persuasive when tied to the risks they pose to revenue, operations, reputation and strategic goals. This makes the case for investment one of protecting business value rather than a technical or fear-based argument.",
      "rationales": {
        "A": "Correct: linking security to business impact speaks the language of senior management and supports informed decisions.",
        "B": "Blocked-attack counts are technical activity metrics that do not show business value or residual risk.",
        "C": "Peer benchmarks ignore the organization's own risks and appetite, so they are a weak basis for commitment.",
        "D": "Media stories may raise awareness briefly but do not show how risk affects this organization's objectives."
      },
      "topic": "Information Security Governance",
      "subtopic": "Organizational Culture and Senior Management Commitment",
      "difficulty": "medium",
      "source": "CISM Domain 1A: Enterprise Governance – obtaining senior management commitment and business case development"
    },
    {
      "stem": "A multinational organization discovers that a newly enacted privacy law in one country where it operates conflicts with a requirement in its board-approved global information security policy. Which of the following should the information security manager do FIRST?",
      "options": [
        "Apply the global policy because the board has approved it",
        "Ask the regulator to grant an exemption from the new law",
        "Assess the conflict with legal counsel and business owners",
        "Rewrite the global policy to adopt the strictest rule everywhere"
      ],
      "answer": "C",
      "explanation": "Legal and regulatory requirements generally take precedence over internal policy, but the information security manager must first understand exactly what the law requires and how the conflict affects the business. Working with legal counsel and the affected business owners establishes the facts needed to decide on a local variance, policy change or other response through proper governance channels.",
      "rationales": {
        "A": "Internal policy cannot override the law; applying it regardless could expose the organization to legal penalties.",
        "B": "Seeking an exemption is premature and unlikely to succeed before the conflict and its impact are understood.",
        "C": "Correct: the requirements and business impact must be understood with legal and business input before deciding a response.",
        "D": "Imposing the strictest rule globally may be unnecessary or costly and is a decision to make only after analysis."
      },
      "topic": "Information Security Governance",
      "subtopic": "Legal, Regulatory and Contractual Requirements",
      "difficulty": "hard",
      "source": "CISM Domain 1A: Enterprise Governance – legal, regulatory and contractual requirements"
    },
    {
      "stem": "Following a risk assessment of a business process, residual risk remains after controls have been applied. Who should accept this residual risk?",
      "options": [
        "The business owner of the process",
        "The information security manager",
        "The internal audit manager",
        "The IT operations manager"
      ],
      "answer": "A",
      "explanation": "Risk acceptance is a business decision, so it belongs to the risk owner, typically the senior manager who owns the business process and is accountable for its outcomes. The information security manager advises on the risk and options but does not own the business risk, and audit must stay independent of such decisions.",
      "rationales": {
        "A": "Correct: the business process owner is accountable for the process and is the appropriate risk owner to accept residual risk.",
        "B": "The security manager assesses and advises on risk but is not accountable for the business process it affects.",
        "C": "Internal audit must remain independent and therefore should not accept risks it may later need to evaluate.",
        "D": "IT operations often acts as a custodian of systems, not as the owner of the business risk."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk and Control Ownership",
      "difficulty": "easy",
      "source": "CISM Domain 2B: Risk Response – risk and control ownership"
    },
    {
      "stem": "Which of the following is the MOST important reason for performing information security risk assessments on a recurring basis rather than only once?",
      "options": [
        "To produce annual documentation requested by auditors",
        "To justify the security budget at each fiscal year",
        "Threats, vulnerabilities and business conditions change",
        "To keep the size of the risk register consistent"
      ],
      "answer": "C",
      "explanation": "Risk is dynamic: new threats emerge, new vulnerabilities are found and the business itself changes through new systems, processes and markets. Recurring assessment keeps the organization's understanding of its risk current so that controls and priorities stay appropriate to the actual risk profile.",
      "rationales": {
        "A": "Audit evidence may be a by-product, but compliance documentation is not the main reason to reassess risk.",
        "B": "Assessments can inform budgeting, but justifying spend is a secondary benefit rather than the purpose.",
        "C": "Correct: the risk profile changes over time, so assessments must be repeated to remain accurate.",
        "D": "The number of register entries has no intrinsic value; the register should reflect real, current risk."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Emerging Risk and Threat Landscape",
      "difficulty": "easy",
      "source": "CISM Domain 2A: Risk Assessment – emerging risk and threat landscape; ongoing risk assessment"
    },
    {
      "stem": "An analysis shows that a proposed control would cost more each year than the reduction in annualized loss expectancy it would deliver. Which of the following would be the BEST course of action for the information security manager?",
      "options": [
        "Implement the control because security takes priority",
        "Present the analysis to the risk owner to consider other options",
        "Stop the related business activity to avoid the risk",
        "Purchase cyber insurance to transfer the risk immediately"
      ],
      "answer": "B",
      "explanation": "Controls should be cost-justified; when a control costs more than the risk it reduces, it is not an economically sound treatment. The risk owner should decide among the remaining options, such as a cheaper control, transfer, avoidance or acceptance within risk appetite, based on the analysis the information security manager provides.",
      "rationales": {
        "A": "Spending more than the expected loss reduction destroys value and ignores cost-benefit principles.",
        "B": "Correct: the risk owner should choose an alternative treatment using the cost-benefit analysis provided.",
        "C": "Avoidance may be one option, but it is a business decision and is not justified by cost alone.",
        "D": "Transfer is one option among several and should be chosen by the risk owner after evaluation, not by default."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Treatment / Risk Response Options",
      "difficulty": "medium",
      "source": "CISM Domain 2B: Risk Response – risk treatment options and cost-benefit analysis of controls"
    },
    {
      "stem": "An asset is valued at $200,000. A specific threat would destroy 25% of the asset's value each time it occurs, and it is expected to occur once every two years. A proposed control costing $15,000 per year would reduce the expected frequency to once every ten years. What is the annual net benefit of implementing the control?",
      "options": [
        "$10,000",
        "$20,000",
        "$25,000",
        "$5,000"
      ],
      "answer": "D",
      "explanation": "Single loss expectancy is asset value times exposure factor: $200,000 x 0.25 = $50,000. The annualized loss expectancy is SLE x ARO, so it falls from $50,000 x 0.5 = $25,000 to $50,000 x 0.1 = $5,000, a reduction of $20,000. Subtracting the $15,000 annual control cost leaves a net benefit of $5,000.",
      "rationales": {
        "A": "This figure does not follow from the SLE, ARO and control cost given in the scenario.",
        "B": "$20,000 is the reduction in ALE before deducting the $15,000 annual cost of the control.",
        "C": "$25,000 is the original ALE without the control, not the net benefit of implementing it.",
        "D": "Correct: ALE drops from $25,000 to $5,000, a $20,000 reduction, minus $15,000 control cost equals $5,000."
      },
      "topic": "Information Security Risk Management",
      "subtopic": "Risk Assessment and Analysis",
      "difficulty": "hard",
      "source": "CISM Domain 2A: Risk Assessment – quantitative risk analysis (SLE, ARO, ALE)"
    },
    {
      "stem": "Which of the following roles is responsible for determining the classification level of an information asset?",
      "options": [
        "The data custodian",
        "The information security manager",
        "The data owner",
        "The system administrator"
      ],
      "answer": "C",
      "explanation": "The data owner, usually a business manager, is accountable for the information and best understands its value and sensitivity, so the owner decides its classification. Custodians and administrators implement the protections that the classification requires, and the information security manager defines the classification scheme and supports owners in applying it.",
      "rationales": {
        "A": "The custodian maintains and protects data as directed but does not decide how it is classified.",
        "B": "The security manager designs the classification scheme and advises, but the owner assigns the level.",
        "C": "Correct: the data owner is accountable for the asset and determines its classification.",
        "D": "System administrators implement technical controls and do not own the business information."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Asset Identification and Classification",
      "difficulty": "easy",
      "source": "CISM Domain 3A: Program Development – information asset identification and classification"
    },
    {
      "stem": "The board has asked for evidence that the security awareness program is changing employee behavior. Which of the following metrics would BEST provide this?",
      "options": [
        "Trend in click and reporting rates in simulated phishing tests",
        "Number of awareness training sessions delivered this year",
        "Percentage of staff who completed the annual online course",
        "Average score achieved on the end-of-course knowledge quiz"
      ],
      "answer": "A",
      "explanation": "The board wants to know whether the program is effective, which means measuring outcomes in actual behavior rather than training activity. Trends in how often employees click on, or report, simulated phishing emails show whether people act more securely over time, whereas session counts, completion rates and quiz scores measure participation or short-term recall.",
      "rationales": {
        "A": "Correct: phishing simulation trends measure real behavior change, which is the program's intended outcome.",
        "B": "Session counts measure activity delivered, not whether employees behave more securely.",
        "C": "Completion rates show participation and compliance, not a change in behavior.",
        "D": "Quiz scores reflect short-term knowledge recall, which may not translate into secure behavior."
      },
      "topic": "Information Security Program",
      "subtopic": "Security Awareness and Training",
      "difficulty": "medium",
      "source": "CISM Domain 3B: Program Management – security awareness and training; Domain 3A: information security program metrics"
    },
    {
      "stem": "An organization is moving a customer-facing application to a cloud service provider. Which of the following is the MOST effective way to ensure that the provider will meet the organization's security requirements?",
      "options": [
        "Rely on the provider's published security whitepaper",
        "Require the provider to adopt the organization's own tools",
        "Scan the provider's systems periodically without notice",
        "Define security requirements and audit rights in the contract"
      ],
      "answer": "D",
      "explanation": "With external services, the contract is the primary means of making security obligations enforceable. Specifying the required controls, service levels, incident notification and the right to audit or receive independent assurance gives the organization a basis to verify and enforce the provider's performance throughout the relationship.",
      "rationales": {
        "A": "A whitepaper is marketing information that creates no enforceable obligation on the provider.",
        "B": "Mandating specific tools is usually impractical in shared cloud services and does not ensure outcomes.",
        "C": "Unauthorized scanning may breach the provider's terms and does not create enforceable requirements.",
        "D": "Correct: contractual requirements and audit rights make security obligations enforceable and verifiable."
      },
      "topic": "Information Security Program",
      "subtopic": "Management of External Services",
      "difficulty": "medium",
      "source": "CISM Domain 3B: Program Management – management of external services and relationships"
    },
    {
      "stem": "An organization wants to specify the minimum password length and complexity rules that must be applied consistently on all of its systems. In which type of document should these requirements BEST be defined?",
      "options": [
        "Information security policy",
        "Information security standard",
        "Information security guideline",
        "Information security procedure"
      ],
      "answer": "B",
      "explanation": "Standards set mandatory, measurable requirements that support policy, such as specific password parameters. Policies state high-level management intent and change rarely, guidelines are recommendations rather than requirements, and procedures describe the step-by-step tasks for carrying out a process.",
      "rationales": {
        "A": "Policies express high-level intent and direction; detailed parameters would make them too specific and volatile.",
        "B": "Correct: standards define mandatory, specific requirements such as password length and complexity.",
        "C": "Guidelines are advisory, so they cannot enforce consistent mandatory rules across systems.",
        "D": "Procedures describe how to perform tasks step by step rather than set the required parameters."
      },
      "topic": "Information Security Program",
      "subtopic": "Information Security Policies, Procedures and Guidelines",
      "difficulty": "easy",
      "source": "CISM Domain 3A: Program Development – information security policies, standards, procedures and guidelines"
    },
    {
      "stem": "The information security manager learns that a business unit routinely bypasses a required security control because it significantly slows a revenue-critical process. Which of the following would be the BEST approach of the information security manager?",
      "options": [
        "Analyze the risk and business need with the unit, then adjust the control or seek risk acceptance",
        "Report the business unit to senior management for noncompliance with security policy",
        "Remove the control from the requirements because it is impeding the business process",
        "Enforce the control technically so that the business unit can no longer bypass it"
      ],
      "answer": "A",
      "explanation": "Repeated bypassing signals that the control may be poorly matched to the business process. The information security manager should understand the business need and the risk, then either redesign the control so that it protects without unacceptable impact or have the risk owner formally accept the risk. This keeps security aligned with the business while ensuring risk stays within appetite.",
      "rationales": {
        "A": "Correct: understanding the need and risk allows a balanced redesign or a formal, accountable risk decision.",
        "B": "Escalation may be needed later, but it addresses the symptom without resolving why the control fails the business.",
        "C": "Removing the control without risk analysis may leave the organization exposed beyond its risk appetite.",
        "D": "Forcing the control ignores the business impact and may drive further workarounds or harm revenue."
      },
      "topic": "Information Security Program",
      "subtopic": "Control Design and Selection",
      "difficulty": "medium",
      "source": "CISM Domain 3B: Program Management – control design and selection; integrating controls with business processes"
    },
    {
      "stem": "An organization is developing a new in-house application that will process sensitive customer data. At which stage of the system development life cycle is it MOST cost-effective to address security requirements?",
      "options": [
        "During user acceptance testing",
        "After deployment through patching",
        "During coding by the developers",
        "During requirements definition"
      ],
      "answer": "D",
      "explanation": "Security requirements identified during requirements definition can be designed into the architecture from the start. The later a security gap is found, the more design and code must be reworked, so retrofitting security during testing or after deployment is considerably more expensive and often less effective.",
      "rationales": {
        "A": "Finding missing security requirements at acceptance testing forces costly rework of design and code.",
        "B": "Patching after deployment is the most expensive point to fix security and leaves a window of exposure.",
        "C": "Coding is too late to shape architecture; requirements not defined earlier cannot be built in reliably.",
        "D": "Correct: defining security requirements at the outset lets them be designed in at the lowest cost."
      },
      "topic": "Information Security Program",
      "subtopic": "Control Implementation and Integration",
      "difficulty": "medium",
      "source": "CISM Domain 3B: Program Management – control implementation and integration; security in the SDLC"
    },
    {
      "stem": "Which of the following is the PRIMARY purpose of a business impact analysis (BIA)?",
      "options": [
        "To identify all technical vulnerabilities in IT systems",
        "To select the most suitable backup technology",
        "To identify critical processes and the impact of their disruption",
        "To estimate the probability of specific disasters occurring"
      ],
      "answer": "C",
      "explanation": "A BIA determines which business processes are critical and how the impact of their disruption grows over time. This drives recovery priorities and objectives such as RTO and RPO. It focuses on impact rather than likelihood or technical weaknesses, which are addressed by risk and vulnerability assessments.",
      "rationales": {
        "A": "Finding technical vulnerabilities is the job of vulnerability assessment, not a BIA.",
        "B": "Backup technology is chosen later, based on the recovery objectives that the BIA helps set.",
        "C": "Correct: a BIA identifies critical processes and how disruption impact grows, setting recovery priorities.",
        "D": "Estimating likelihood belongs to risk assessment; a BIA focuses on the consequences of disruption."
      },
      "topic": "Incident Management",
      "subtopic": "Business Impact Analysis",
      "difficulty": "easy",
      "source": "CISM Domain 4A: Incident Management Readiness – business impact analysis (BIA)"
    },
    {
      "stem": "The owner of an order-processing system states that the business can tolerate losing no more than four hours of transaction data if the system fails. Which recovery parameter does this statement define?",
      "options": [
        "Recovery time objective",
        "Recovery point objective",
        "Maximum tolerable downtime",
        "Service delivery objective"
      ],
      "answer": "B",
      "explanation": "The recovery point objective is the maximum acceptable amount of data loss, measured as the point in time to which data must be restored. A four-hour RPO means backups or replication must capture data at least every four hours. Time-based measures of how long the process can be down are different parameters.",
      "rationales": {
        "A": "RTO is how quickly the system must be restored after disruption, not how much data may be lost.",
        "B": "Correct: RPO defines the maximum tolerable data loss, measured back from the time of the failure.",
        "C": "Maximum tolerable downtime is the longest outage the business can survive, not a data-loss limit.",
        "D": "The service delivery objective is the service level to be provided in alternate processing mode."
      },
      "topic": "Incident Management",
      "subtopic": "Business Continuity and Disaster Recovery Plans",
      "difficulty": "medium",
      "source": "CISM Domain 4A: Incident Management Readiness – BCP and DRP; recovery objectives (RTO, RPO, MTD, SDO)"
    },
    {
      "stem": "A server believed to have been compromised by an attacker has already been isolated from the network. Management intends to pursue legal action, so a forensic investigation will be performed. Which of the following should be done FIRST?",
      "options": [
        "Shut down the server to prevent further changes",
        "Run antivirus software to remove the malicious code",
        "Copy the log files to removable media for review",
        "Capture volatile data such as memory and system state"
      ],
      "answer": "D",
      "explanation": "Evidence should be collected in order of volatility. Memory contents, running processes and network connections are lost when the system is powered down, so they must be captured first by qualified staff using sound methods and chain of custody. Shutting down, cleaning or copying files ad hoc can destroy or alter evidence and weaken its admissibility.",
      "rationales": {
        "A": "Powering down destroys volatile evidence such as memory, processes and active connections.",
        "B": "Running antivirus alters the system and may delete evidence needed for legal proceedings.",
        "C": "Ad hoc copying to removable media changes system state and lacks forensic integrity and chain of custody.",
        "D": "Correct: volatile data is lost first, so it must be captured before any other action alters the system."
      },
      "topic": "Incident Management",
      "subtopic": "Incident Investigation and Evaluation",
      "difficulty": "hard",
      "source": "CISM Domain 4B: Incident Management Operations – incident investigation and evaluation; evidence handling and chain of custody"
    },
    {
      "stem": "Which of the following is the PRIMARY objective of conducting a post-incident review after a significant security incident has been resolved?",
      "options": [
        "To identify lessons learned that improve future response",
        "To determine which employees were at fault for the incident",
        "To calculate the final cost to report to insurers",
        "To formally close the incident ticket in the tracking system"
      ],
      "answer": "A",
      "explanation": "A post-incident review examines what happened, what worked and what did not, so that the incident response plan, controls and training can be improved. It should be constructive rather than about assigning blame; cost reporting and ticket closure are administrative activities that may accompany the review but are not its aim.",
      "rationales": {
        "A": "Correct: the review exists to capture lessons learned and improve the response capability and controls.",
        "B": "A blame-focused review discourages open reporting and is not the purpose of the exercise.",
        "C": "Cost figures may be gathered, but insurance reporting is a secondary administrative task.",
        "D": "Closing the ticket is an administrative step and does not by itself improve future response."
      },
      "topic": "Incident Management",
      "subtopic": "Post-incident Review Practices",
      "difficulty": "medium",
      "source": "CISM Domain 4B: Incident Management Operations – post-incident review practices"
    },
    {
      "stem": "When an information security incident is reported, which of the following should be the MOST important factor in determining its severity classification?",
      "options": [
        "The number of systems involved",
        "The type of attack technique used",
        "The potential impact on critical business functions",
        "The time of day the incident was detected"
      ],
      "answer": "C",
      "explanation": "Incident severity should reflect business impact, so that response resources and escalation match what is at stake for the organization. Classification criteria derived from the BIA and asset criticality ensure that an incident affecting a single critical system is treated more seriously than one touching many unimportant systems.",
      "rationales": {
        "A": "Many low-value systems may matter less than one critical system, so system count alone can mislead.",
        "B": "Attack technique informs the technical response but does not by itself indicate business severity.",
        "C": "Correct: severity is driven by the potential impact on the organization's critical business functions.",
        "D": "Detection time can affect staffing but has no bearing on how severe the incident is for the business."
      },
      "topic": "Incident Management",
      "subtopic": "Incident Classification/Categorization",
      "difficulty": "medium",
      "source": "CISM Domain 4A: Incident Management Readiness – incident classification and categorization"
    },
    {
      "stem": "An organization wants to test its disaster recovery plan in a way that verifies the recovery site can actually process live workloads, without risking disruption to production operations. Which type of test would BEST meet this objective?",
      "options": [
        "Tabletop walk-through of the plan",
        "Parallel test at the recovery site",
        "Full interruption test of production",
        "Checklist review by the plan owners"
      ],
      "answer": "B",
      "explanation": "In a parallel test, recovery systems are brought up at the alternate site and process real or representative workloads while production continues to run normally. This demonstrates that the recovery capability works without the risk of a full interruption test, which deliberately stops primary operations, while tabletop and checklist reviews only validate the plan on paper.",
      "rationales": {
        "A": "A tabletop exercise discusses the plan but does not prove the recovery site can process workloads.",
        "B": "Correct: a parallel test exercises the recovery site with real processing while production keeps running.",
        "C": "A full interruption test shuts down production, which carries exactly the disruption risk to be avoided.",
        "D": "A checklist review checks the plan's completeness but does not exercise any systems."
      },
      "topic": "Incident Management",
      "subtopic": "Incident Management Training, Testing and Evaluation",
      "difficulty": "hard",
      "source": "CISM Domain 4A: Incident Management Readiness – testing of incident response, BCP and DRP (test types)"
    }
  ]
}
```
