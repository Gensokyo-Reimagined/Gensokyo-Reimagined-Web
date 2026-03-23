export interface Contact {
    discord?: string;
    twitter?: string;
    github?: string;
    youtube?: string;
    other?: string;
}

export interface TeamMember {
    name: string;
    avatar: string;
    // true = GitHub username, false = (http/path is regarded as an image, otherwise it is considered as a Discord ID)
    avatarUseGithub: boolean;
    position: string;
    contact: Contact;
}

export interface Team {
    name: string;
    image?: string;
    color?: string | string[];
    list: TeamMember[];
}

export const teams: Team[] = [
    {
        name: "Project Leads",
        image: "/icons/staff/admin.webp",
        color: ["#aa3b3b","#ff4848"],
        list: [
            {
                name: "Taiyou",
                //url or GitHub username or discord user ID
                avatar: "329733028899323905",
                //if true, then the avatar must be the GitHub username
                avatarUseGithub: false,
                position: "Admin/Project Manager",
                // support discord twitter github youtube other
                contact: {
                    discord: "taiyouh",
                    github: "Taiyou06"
                }
            },
            {
                name: "ruby",
                avatar: "rubiline",
                avatarUseGithub: true,
                position: "Design Lead",
                contact: {
                    discord: "yellowcakebunny",
                    github: "rubiline"
                }
            },
            {
                name: "jellyfly",
                avatar: "263101964676628480",
                avatarUseGithub: false,
                position: "Build Lead",
                contact: {
                    discord: "jellyfly",
                }
            },
            {
                name: "Momo",
                avatar: "336133038868004864",
                avatarUseGithub: false,
                position: "Build Lead",
                contact: {
                    discord: "thestupendousmomo",
                }
            }
        ]
    },
    {
        name: "Developers",
        image: "/icons/staff/developer.webp",
        color: ["#369876", "#4fff87"],
        list: [
            {
                name: "misaka10843",
                avatar: "misaka10843",
                avatarUseGithub: true,
                position: "Web Developer",
                contact: {
                    discord: "yoruchinatsuki",
                    github: "misaka10843"
                }
            },
            {
                name: "Atliami",
                avatar: "yoshiweegee",
                avatarUseGithub: true,
                position: "Developer",
                contact: {
                    discord: "altiami",
                    twitter: "https://x.com/Altiamie",
                    github: "yoshiweegee"
                }
            },
            {
                name: "DoggySazHi",
                avatar: "DoggySazHi",
                avatarUseGithub: true,
                position: "Developer",
                contact: {
                    discord: "doggysazhi",
                    github: "DoggySazHi"
                }
            },
            {
                name: "kidofcubes",
                avatar: "kidofcubes",
                avatarUseGithub: true,
                position: "System Manager/Developer",
                contact: {
                    github: "kidofcubes"
                }
            },
            {
                name: "yumio",
                avatar: "yumio7",
                avatarUseGithub: true,
                position: "Developer/Designer",
                contact: {
                    discord: "yumio",
                    twitter: "https://x.com/Yumio_7",
                    github: "kidofcubes"
                }
            },
            {
                name: "Anthei",
                avatar: "316934715535917058",
                avatarUseGithub: false,
                position: "Developer/Designer",
                contact: {
                    discord: "anthei",
                }
            }
        ]
    }, {
        name: "Builders",
        image: "/icons/staff/build-lead.webp",
        color: ["#401eff","#528fff"],
        list: [
            {
                name: "GDK",
                avatar: "689596661831434254",
                avatarUseGithub: false,
                position: "Senior Builder",
                contact: {
                    discord: "notspy_",
                }
            },
            {
                name: "Halfpot",
                avatar: "218123473116069888",
                avatarUseGithub: false,
                position: "Senior Builder",
                contact: {
                    discord: "ramul8825",
                }
            },
            {
                name: "Yorvska",
                avatar: "291656657077927936",
                avatarUseGithub: false,
                position: "Senior Builder",
                contact: {
                    twitter: "https://x.com/Eorvun1",
                    discord: "yorvska"
                }
            },
            {
                name: "pizzaheadxd",
                avatar: "285492492869304323",
                avatarUseGithub: false,
                position: "Builder",
                contact: {
                    discord: "pizzaheadxd"
                }
            },
            {
                name: "AzureAqua",
                avatar: "264519033188122625",
                avatarUseGithub: false,
                position: "Builder",
                contact: {
                    discord: "azureaqua"
                }
            },
            {
                name: "cheese04",
                avatar: "627260730088882176",
                avatarUseGithub: false,
                position: "Builder",
                contact: {
                    discord: "cheese04"
                }
            },
            {
                name: "EmptyLie",
                avatar: "518633407362629643",
                avatarUseGithub: false,
                position: "Builder",
                contact: {
                    discord: "emptylie"
                }
            },
            {
                name: "pacw64000",
                avatar: "364079040690257920",
                avatarUseGithub: false,
                position: "Builder",
                contact: {
                    discord: "pacw64000"
                }
            },
            {
                name: "pyraaya",
                avatar: "294237640365047810",
                avatarUseGithub: false,
                position: "Builder",
                contact: {
                    discord: "pyraaya"
                }
            },
            {
                name: "Speedy",
                avatar: "116243412994359299",
                avatarUseGithub: false,
                position: "Builder",
                contact: {
                    discord: "speedy"
                }
            },
            {
                name: "Volt7",
                avatar: "321985549890224138",
                avatarUseGithub: false,
                position: "Builder",
                contact: {
                    discord: "volt7"
                }
            },
        ]
    },
];

// better use the web config tool like https://api.sakurakoi.top to edit this.
// just swap out the JSON below with the one you get there.
// might look into pulling the config directly from an API later on.(include app.config.ts)

export const ContributorsConfig = {
    "config": [
        {
            "role_ids": [
                "1184284040895926373"
            ],
            "include_user_ids": [],
            "name": "Project Leads",
            "color": "#aa3b3b,#ff4848",
            "image": "/icons/staff/admin.webp"
        },
        {
            "role_ids": [
                "1015923794948411412",
                "1134330475595432007",
                "1220961501012033617"
            ],
            "include_user_ids": [],
            "name": "Developer",
            "color": "#369876,#4fff87",
            "image": "/icons/staff/developer.webp"
        },
        {
            "role_ids": [
                "1013227032903172126",
                "1109244656589471835"
            ],
            "include_user_ids": [],
            "name": "Moderators",
            "color": "#ff6127"
        }
    ],
    "overrides": {}
}