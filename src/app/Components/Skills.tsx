'use client'
import { SetStateAction, startTransition, useState } from "react";
import TabButton from "./UI/tabButton"

export const Skills = () => {
    interface TabData {
        title: string;
        id: string;
        content: JSX.Element;
      }

      const TAB_DATA: TabData[] = [
          { title: "Skills", id: "skills", content: (
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>HTML &amp; CSS</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            ), },
          { title: "Education", id: "education", content: (
              <ul className="space-y-2 text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
                <li>Masters in Child Clinical Psychology (Distinction)</li>
                <li>Undergraduate (Hons) degree in Psychology (High 2:1)</li>
              </ul>
            ),},
          { title: "Certifications", id: "certifications", content: (
              <ul className="space-y-2 text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
                <li>Codecademy: Foundations in Web Development</li>
                <li>Codecademy: Responsive Design</li>
                <li>Codecademy: TypeScript Foundations</li>
                <li>Codecademy: Front-End Development</li>
                <li>Girls Code: Getting Started with Python &amp; Apps</li>
              </ul>
            ), },
      ];
    const [tab, setTab] = useState<string>("skills");

    const handleTabChange = (id: SetStateAction<string>) => {
        startTransition(() => {
          setTab(id);
        });
      };

    return (
    <div>
        <div className="flex flex-row gap-1 border-b border-neutral-200 text-base dark:border-neutral-800">
            <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
            >
                Skills
            </TabButton>
            <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
            >
                Education
            </TabButton>
            <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
            >
                Certifications
            </TabButton>
        </div>

        <div className="mt-6 min-h-[140px]">
                {TAB_DATA.find((t: { id: any} ) => t.id === tab)?.content}
        </div>

</div>

    )
}
