import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: [
        {
            id: "101",
            title: "Software Developer",
            company: "Amazon",
            image: "https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-2048x1152.jpeg.webp",
            salaryRange: "700k-1M",
            location: "Mumbai, Maharashtra, India",
            description: "Be part of something bigger. Decode the future.\n\nAt Electrolux, as a" +
                "leading global appliance company, we strive every day to shape living for the better for " +
                "our consumers, our people and our planet. We share ideas and collaborate so that together," +
                "we can develop solutions that deliver enjoyable and sustainable living.\n\n " +
                "Come join us as you are. We believe diverse perspectives make us stronger and more innovative." +
                "In our global community of people from 100+ countries, we listen to each other, actively" +
                "contribute and grow together.\n\nJoin us in our exciting quest to build the future home.\n\n" +
                "All about the role:\n\nHead of logistics oversees the movement, distribution, and storage of goods," +
                " ensuring the efficient and cost-effective delivery of products." +
                "They are responsible for managing logistics operations, optimizing supply chain processes, coordinating with vendors and internal teams, and ensuring customer satisfaction.\n\n" +
                "In this role, you will work closely with BA, AP logistics organizations, purchasing organization, key partners and stake holders both local and BA\n\n" +
                "What you’ll do:\n• Plan, coordinate, and monitor the logistics processes, including transportation, warehousing, and inventory management.\n• Oversee inbound and outbound logistics to ensure timely delivery and cost efficiency." +
                "\n• Address operational challenges, such as shipment delays, damaged goods, or cost overruns.\n• Develop contingency plans to mitigate risks and ensure business continuity.\n• Develop strategies to streamline logistics processes and improve overall supply chain efficiency\n• Analyze data to identify trends, risks, and opportunities for process improvement.\n• Implement cost-saving measures while maintaining service quality.\n• Participate in tendering process to ensure right selection of service provider partners, negotiate contracts and manage relationships with transporters, suppliers, and logistics partners\n• Evaluate service provider’s performance and ensure adherence to quality and service agreements." +
                "\n• Ensure the quality of all the activities in logistics flows - handling, storage, transportation, including conducting regular audits to identify areas for improvement and ensure compliance with quality standards\n• Drive operational improvements throughout logistics operation within country\n• Lead, train, and motivate logistics staff to achieve departmental goals.\n• Collaborate with internal teams, such as procurement, sales, and customer service, to align logistics with business objectives.\n• Monitor logistics metrics, such as delivery times, cost per shipment, and inventory accuracy." +
                "\n• Prepare and present reports to management on logistics performance and efficiency in alignment with BA guidance\n• Ensure compliance with legal and regulatory requirements related to transportation and logistics.\n\nIn this role, you will be dealing with Electrolux’s Internal customers and External customers You should be confident in dealing with leaders both from a country & regional level perspective.\n\nIn Electrolux, we encourage open communication at all levels and put emphasis in dealing with our customers as well as colleagues with integrity and respect. You will be working in Mumbai Office on regular working hours and may be required to travel both domestic and international\n\nWho are you:\n\n" +
                "Competencies to be stated, Electrolux as well as technical competencies to be listed below.\n\nFor you to succeed in this role, you should be:\n• Innovative – You know your stuff and apply your knowledge and new ways of thinking to innovate new ways of working.\n• Result Oriented – Maximizing efficiencies and hitting KPIs are just the beginning: your real passion is delivering products that change and enhance lives. The rest is a bonus.\n• Agile – You work with urgency, analyzing and adapting to different situations, quickly understanding changes, and reacting confidently and decisively.\n• Collaborative – You build trust, good working relationships and communicate effectively with your colleagues and across functions." +
                "\n• Of Digital Mindset – Believe in transforming conventional Logistics operations to digital operation and must have developed such expertise\n\nYou are expected to participate in special projects as requested by Electrolux management either as required by the business and/or as part of your career development plan.\n\nEDUCATION\n• Bachelor’s degree in engineering, Supply chain management, Logistics, Business Administration, or a related field.\n• Post-graduation – Within the field of Logistics and supply chain will be a plus point.\n• Professional certification i.e. ASCM (formerly known as APICS) CPIM or CSCP will be another plus point.\n\nEXPERIENCE\n• At least 10 years’ experience in Logistics operations (warehousing, transportation, customs), ideally in a sales/manufacturing organization within the (durable) consumer goods, automotive or electronics industry\n• Proven experience as a Senior leadership Role in Logistics or similar role. Strong understanding of logistics and supply chain management principles.\n• Proficiency in logistics software (e.g., WMS, TMS) and Microsoft Office tools.\n• Excellent problem-solving, analytical, and decision-making skills.\n• Strong leadership and team management capabilities.\n• Exceptional organizational and communication skills.\n• Ability to multitask, work under pressure, and meet deadlines\n• Experience working with international logistics and customs processes.\n\nKeeping you Healthy and Safe\n\nWe want you to return home in even better shape than when you started, so we need you to help us do this by making sure you follow a few simple steps. We need you to:\n• Make sure you take reasonable care for your own health and safety, and\n• Take reasonable care that what you do (or what you don’t do when you should have) doesn’t affect the health and safety of others, and\n• Follow reasonable instructions that we might give from time-to-time, such as reporting incidents and hazards, and\n• Follow policies or procedures, so long as it’s reasonable and we’ve told you about it, and\n• Attend training that helps you to work safely"
        },
        {
            id: "102",
            title: "Operation Engineer",
            company: "Flipkart",
            image: "https://banner2.cleanpng.com/20180711/xqq/aawoyegun.webp",
            salaryRange: "1M-2M",
            location: "Hydrabad, Telengana, India",
            description: "Be part of something bigger. Decode the future.\n\nAt Electrolux, as a" +
                "leading global appliance company, we strive every day to shape living for the better for " +
                "our consumers, our people and our planet. We share ideas and collaborate so that together," +
                "we can develop solutions that deliver enjoyable and sustainable living.\n\n " +
                "Come join us as you are. We believe diverse perspectives make us stronger and more innovative." +
                "In our global community of people from 100+ countries, we listen to each other, actively" +
                "contribute and grow together.\n\nJoin us in our exciting quest to build the future home.\n\n" +
                "All about the role:\n\nHead of logistics oversees the movement, distribution, and storage of goods," +
                " ensuring the efficient and cost-effective delivery of products." +
                "They are responsible for managing logistics operations, optimizing supply chain processes, coordinating with vendors and internal teams, and ensuring customer satisfaction.\n\n" +
                "In this role, you will work closely with BA, AP logistics organizations, purchasing organization, key partners and stake holders both local and BA\n\n" +
                "What you’ll do:\n• Plan, coordinate, and monitor the logistics processes, including transportation, warehousing, and inventory management.\n• Oversee inbound and outbound logistics to ensure timely delivery and cost efficiency." +
                "\n• Address operational challenges, such as shipment delays, damaged goods, or cost overruns.\n• Develop contingency plans to mitigate risks and ensure business continuity.\n• Develop strategies to streamline logistics processes and improve overall supply chain efficiency\n• Analyze data to identify trends, risks, and opportunities for process improvement.\n• Implement cost-saving measures while maintaining service quality.\n• Participate in tendering process to ensure right selection of service provider partners, negotiate contracts and manage relationships with transporters, suppliers, and logistics partners\n• Evaluate service provider’s performance and ensure adherence to quality and service agreements." +
                "\n• Ensure the quality of all the activities in logistics flows - handling, storage, transportation, including conducting regular audits to identify areas for improvement and ensure compliance with quality standards\n• Drive operational improvements throughout logistics operation within country\n• Lead, train, and motivate logistics staff to achieve departmental goals.\n• Collaborate with internal teams, such as procurement, sales, and customer service, to align logistics with business objectives.\n• Monitor logistics metrics, such as delivery times, cost per shipment, and inventory accuracy." +
                "\n• Prepare and present reports to management on logistics performance and efficiency in alignment with BA guidance\n• Ensure compliance with legal and regulatory requirements related to transportation and logistics.\n\nIn this role, you will be dealing with Electrolux’s Internal customers and External customers You should be confident in dealing with leaders both from a country & regional level perspective.\n\nIn Electrolux, we encourage open communication at all levels and put emphasis in dealing with our customers as well as colleagues with integrity and respect. You will be working in Mumbai Office on regular working hours and may be required to travel both domestic and international\n\nWho are you:\n\n" +
                "Competencies to be stated, Electrolux as well as technical competencies to be listed below.\n\nFor you to succeed in this role, you should be:\n• Innovative – You know your stuff and apply your knowledge and new ways of thinking to innovate new ways of working.\n• Result Oriented – Maximizing efficiencies and hitting KPIs are just the beginning: your real passion is delivering products that change and enhance lives. The rest is a bonus.\n• Agile – You work with urgency, analyzing and adapting to different situations, quickly understanding changes, and reacting confidently and decisively.\n• Collaborative – You build trust, good working relationships and communicate effectively with your colleagues and across functions." +
                "\n• Of Digital Mindset – Believe in transforming conventional Logistics operations to digital operation and must have developed such expertise\n\nYou are expected to participate in special projects as requested by Electrolux management either as required by the business and/or as part of your career development plan.\n\nEDUCATION\n• Bachelor’s degree in engineering, Supply chain management, Logistics, Business Administration, or a related field.\n• Post-graduation – Within the field of Logistics and supply chain will be a plus point.\n• Professional certification i.e. ASCM (formerly known as APICS) CPIM or CSCP will be another plus point.\n\nEXPERIENCE\n• At least 10 years’ experience in Logistics operations (warehousing, transportation, customs), ideally in a sales/manufacturing organization within the (durable) consumer goods, automotive or electronics industry\n• Proven experience as a Senior leadership Role in Logistics or similar role. Strong understanding of logistics and supply chain management principles.\n• Proficiency in logistics software (e.g., WMS, TMS) and Microsoft Office tools.\n• Excellent problem-solving, analytical, and decision-making skills.\n• Strong leadership and team management capabilities.\n• Exceptional organizational and communication skills.\n• Ability to multitask, work under pressure, and meet deadlines\n• Experience working with international logistics and customs processes.\n\nKeeping you Healthy and Safe\n\nWe want you to return home in even better shape than when you started, so we need you to help us do this by making sure you follow a few simple steps. We need you to:\n• Make sure you take reasonable care for your own health and safety, and\n• Take reasonable care that what you do (or what you don’t do when you should have) doesn’t affect the health and safety of others, and\n• Follow reasonable instructions that we might give from time-to-time, such as reporting incidents and hazards, and\n• Follow policies or procedures, so long as it’s reasonable and we’ve told you about it, and\n• Attend training that helps you to work safely"
        },
        {
            id: "103",
            title: "Back-end Web Developer",
            company: "Fastspot",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ABC-2021-LOGO.svg/1200px-ABC-2021-LOGO.svg.png",
            location: "Anywhere",
            salaryRange: "500k-700k",
            description: "Come join us as you are. We believe diverse perspectives make us stronger and more innovative." +
                "In our global community of people from 100+ countries, we listen to each other, actively" +
                "contribute and grow together.\n\nJoin us in our exciting quest to build the future home.\n\n" +
                "All about the role:\n\nHead of logistics oversees the movement, distribution, and storage of goods," +
                " ensuring the efficient and cost-effective delivery of products.",
        },
        {
            id: "104",
            title: "Entry Level Web Developer",
            company: "WORKFORCE INC",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllbJor5vVgWB6-tgJaNafMRVO4Ap6vDKzXBJu&s=0",
            location: "Pleasanton, CA",
            salaryRange: "850k"
        },
        {
            id: "105",
            title: "Front End Web Developer",
            company: "Forbes Books",
            description: "Come join us as you are. We believe diverse perspectives make us stronger and more innovative." +
                "In our global community of people from 100+ countries, we listen to each other, actively" +
                "contribute and grow together.\n\nJoin us in our exciting quest to build the future home.\n\n" +
                "All about the role:\n\nHead of logistics oversees the movement, distribution, and storage of goods," +
                " ensuring the efficient and cost-effective delivery of products.",
            image: "https://media.licdn.com/dms/image/v2/D560BAQG3Zpd4vp3aGA/company-logo_200_200/company-logo_200_200/0/1692729869636/federal_information_systems_inc_logo?e=1748476800&v=beta&t=jD0tygtVrEQILSoNMTGxnPRul0s_nHfrGeKbNkpeQOA",
            location: "Anywhere",
            salaryRange: "300k-500k"
        },
        {
            id: "106",
            title: "Web Developer",
            company: "Federal Information Systems, Inc.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9akNRHtlTNbi9ui0agXl12cV5QHjOrDFYQ&s",
            description: "Web Develope is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            location: "Gurgaon, India",
            salaryRange: "500k-800k"
        }

    ],
};

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs(state, action) {
            state.jobs = action.payload;
        },
    },
});

export const { setJobs } = jobsSlice.actions;
export default jobsSlice.reducer;