export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jennifer Adams",
    avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    role: "Software Engineer",
    content: "The courses here are absolutely fantastic! I've learned so much and applied it directly to my job. The instructors are knowledgeable and the content is always up-to-date.",
    rating: 5
  },
  {
    id: "2",
    name: "Mark Stevens",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    role: "Product Manager",
    content: "I've taken multiple courses and each one has exceeded my expectations. The practical approach and real-world examples make learning engaging and effective.",
    rating: 5
  },
  {
    id: "3",
    name: "Rachel Chen",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    role: "UX Designer",
    content: "The design courses helped me transition into UX design successfully. The instructors provide excellent feedback and the community is very supportive.",
    rating: 5
  }
];
