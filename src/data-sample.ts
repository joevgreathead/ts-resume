import { IDisclaimer } from "./components/disclaimer";
import { IEducation } from "./components/education";
import { IEmployment } from "./components/employment";
import { IHeader } from "./components/header";
import { IVolunteer } from "./components/volunteer";

export const header: IHeader = {
  name: "First Lastname",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  links: [
    {
      href: "https://google.com",
      linkText: "google.com",
    },
    {
      href: "https://my.site",
      linkText: "my.site",
    },
    {
      href: "https://another-site.com",
      linkText: "another-site.com",
    },
  ],
};

export const skills: string[] = [
  "Ut enim ad minima veniam.",
  "quis nostrum exercitationem ullam corporis.",
  "suscipit laboriosam, nisi ut aliquid",
  "ex ea commodi consequatur",
  "Ut enim ad minima veniam.",
  "quis nostrum exercitationem ullam corporis.",
  "suscipit laboriosam, nisi ut aliquid",
  "ex ea commodi consequatur",
];

export const employments: IEmployment[] = [
  {
    company: "Company #1 Name",
    position: "Position Description",
    location: "Notaplace, AW",
    startDate: "01/20XX",
    bullets: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    ],
  },
  {
    company: "Company #2 Name",
    position: "Position Description",
    location: "Nowhere, NA",
    startDate: "01/20XX",
    endDate: "12/20XX",
    bullets: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    ],
  },
  {
    company: "Company #3 Name",
    position: "Position Description",
    location: "Somewhere, NA",
    startDate: "01/20XX",
    endDate: "12/20XX",
    bullets: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    ],
  },
];

export const educationHistory: IEducation[] = [
  {
    school: "Some Place University",
    location: "Nowhere, NA",
    bullets: ["B.S. Degree in Some Major of Value, December 20XX"],
  },
];

export const volunteerHistory: IVolunteer[] = [
  {
    location: "Landplace, NA",
    organization: "Company, Inc.",
    position: "Volunteer Position",
    startDate: "01/20XX",
    endDate: "12/20XX",
    bullets: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    ],
  },
];

export const disclaimer: IDisclaimer = {
  tech: [
    {
      href: "https://www.typescriptlang.org",
      linkText: "TypeScript",
    },
    {
      href: "https://webpack.js.org",
      linkText: "Webpack",
    },
  ],
  source: {
    href: "https://github.com",
    linkText: "GitHub",
  },
};
