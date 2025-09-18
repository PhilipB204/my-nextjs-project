import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import ReactIcon from '@/assets/icons/react.svg';
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML 5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon ,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'GitHub',
    iconType: GitHubIcon,
  }
];

const hobbies = [
  {
    title: 'Tennis',
    emoji: '🎾' 
  },
  {
    title: 'Reading',
    emoji: '📚' 
  },
  {
    title: 'Guitar',
    emoji: '🎸' 
  },
  {
    title: 'Games',
    emoji: '🎮' 
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️' 
  },
  {
    title: 'Music',
    emoji: '🎵' 
  },
  {
    title: 'Running',
    emoji: '🏃‍♂️' 
  }
];

export const AboutSection = () => {
  return ( 
    <div className="py-20">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me" 
          title="A Glimpse Into My World" 
          description="Learn More about who I am, what I do, and what inspires me." 
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads" 
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>

          <Card>
            <CardHeader
              title="My Toolbox" 
              description="Explore the technologies and tools I use to craft exceptional experiences."
            />
          <ToolBoxItems items={toolboxItems} />
          </Card>

          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div className="mb-6">
              {hobbies.map(hobby => (
                <div key={hobby.title} className="flex items-center gap-2 my-2">
                  <span>{hobby.emoji}</span>
                  <span>{hobby.title}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
