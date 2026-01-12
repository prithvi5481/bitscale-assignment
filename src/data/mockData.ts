export interface TableRow {
    id: number;
    name: string;
    lastUpdatedAt: string;
    companyName: string;
    companyLogo?: string;
    companyWebsite: string;
    linkedinJobUrl: string;
    emailStatus: 'found' | 'not_met' | 'pending';
    isExpanded?: boolean;
    isCompanyRow?: boolean;
}

export const mockData: TableRow[] = [
    {
        id: 1,
        name: "Mike Braham",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Google",
        companyLogo: "google",
        companyWebsite: "https://www.example.com",
        linkedinJobUrl: "https://www.linkedin.com/example",
        emailStatus: "found",
    },
    {
        id: 2,
        name: "Alex Johnson",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Amazon",
        companyLogo: "amazon",
        companyWebsite: "https://www.sample.com",
        linkedinJobUrl: "https://www.linkedin.com/amazon",
        emailStatus: "found",
    },
    {
        id: 3,
        name: "Sarah Thompson",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "LinkedIn",
        companyLogo: "linkedin",
        companyWebsite: "https://www.testsite.com",
        linkedinJobUrl: "https://www.linkedin.com/linkedin",
        emailStatus: "not_met",
    },
    {
        id: 4,
        name: "David Lee",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Microsoft",
        companyLogo: "microsoft",
        companyWebsite: "https://www.demo.com",
        linkedinJobUrl: "https://www.linkedin.com/microsoft",
        emailStatus: "found",
    },
    {
        id: 5,
        name: "Emily Carter",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "TED",
        companyLogo: "ted",
        companyWebsite: "https://www.siteexample.com",
        linkedinJobUrl: "https://www.linkedin.com/ted",
        emailStatus: "found",
    },
    {
        id: 6,
        name: "James Smith",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Unilever",
        companyLogo: "unilever",
        companyWebsite: "https://www.webpage.com",
        linkedinJobUrl: "https://www.linkedin.com/unilever",
        emailStatus: "found",
    },
    {
        id: 7,
        name: "Laura White",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Apple",
        companyLogo: "apple",
        companyWebsite: "https://www.mywebsite.com",
        linkedinJobUrl: "https://www.linkedin.com/apple",
        emailStatus: "not_met",
    },
    {
        id: 8,
        name: "Chris Brown",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Google",
        companyLogo: "google",
        companyWebsite: "https://www.newsite.com",
        linkedinJobUrl: "https://www.linkedin.com/google",
        emailStatus: "not_met",
    },
    {
        id: 9,
        name: "Jessica Green",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Unilever",
        companyLogo: "unilever",
        companyWebsite: "https://www.uniqueurl.com",
        linkedinJobUrl: "https://www.linkedin.com/unilever",
        emailStatus: "found",
    },
    {
        id: 10,
        name: "Daniel Harris",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Microsoft",
        companyLogo: "microsoft",
        companyWebsite: "https://www.originalsite.com",
        linkedinJobUrl: "https://www.linkedin.com/microsoft",
        emailStatus: "found",
    },
    {
        id: 11,
        name: "Megan Clark",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Apple",
        companyLogo: "apple",
        companyWebsite: "https://www.freshpage.com",
        linkedinJobUrl: "https://www.linkedin.com/apple",
        emailStatus: "not_met",
    },
    {
        id: 12,
        name: "Brian Lewis",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "TED",
        companyLogo: "ted",
        companyWebsite: "https://www.differentdomain.com",
        linkedinJobUrl: "https://www.linkedin.com/ted",
        emailStatus: "found",
    },
    {
        id: 13,
        name: "Samantha Hall",
        lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
        companyName: "Google",
        companyLogo: "google",
        companyWebsite: "https://www.alternativesite.com",
        linkedinJobUrl: "https://www.linkedin.com/google",
        emailStatus: "found",
    },
];

export const companyRows = [
    { id: 14, name: "Google", isCompanyRow: true },
    { id: 15, name: "Amazon", isCompanyRow: true },
    { id: 16, name: "LinkedIn", isCompanyRow: true },
    { id: 17, name: "LinkedIn", isCompanyRow: true },
    { id: 18, name: "LinkedIn", isCompanyRow: true },
];
