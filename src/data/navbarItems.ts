import { UserRole } from "../types/UserRoles";

type NavbarItem = { name: string; path: string; roles: UserRole[] };

export const navbarItems: NavbarItem[] = [
  { name: "Home", path: "/", roles: ["guest", "student", "instructor", "support", "admin"] },
  { name: "Courses", path: "/courses", roles: ["guest", "student", "instructor", "support", "admin"] },
  { name: "About", path: "/about", roles: ["guest", "student", "instructor", "support", "admin"] },
  { name: "Contact", path: "/contact", roles: ["guest", "student", "instructor", "support", "admin"] },
  { name: "Profile", path: "/profile", roles: ["student", "instructor", "support", "admin"] },
  { name: "Quiz", path: "/quiz", roles: ["student"] },
  { name: "Payment", path: "/payment", roles: ["student"] },
  { name: "Track Progress", path: "/track-progress", roles: ["instructor"] },
  { name: "Manage Instructors", path: "/manage-instructors", roles: ["support"] },
  { name: "Manage Certificates", path: "/manage-certificates", roles: ["support"] },
  { name: "Manage Users", path: "/manage-users", roles: ["admin"] },
];
