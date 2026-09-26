import {
  Panel,
  PrimaryInput,
  ProfileIcon,
  TextButton,
} from "@/components/page-components/ui/ui";
import Section from "@/components/section";
import { LuCamera } from "react-icons/lu";

const settingsTabs = [
  {
    title: "Profile",
    value: "profile",
  },
  {
    title: "Security",
    value: "security",
  },
  {
    title: "Notifications",
    value: "notifications",
  },
  {
    title: "Appearance",
    value: "appearance",
  },
  {
    title: "Privacy",
    value: "privacy",
  },
];

export default function Settings() {
  return (
    <Section title="Settings">
      <div className="flex flex-col gap-8">
        <div>
          <button>
            {settingsTabs.map((entry, index) => (
              <span
                key={index}
                className={`px-6 py-3 border-b-2 ${index === 0 ? "border-b-3 border-sky-700 text-sky-700" : ""}`}
              >
                {entry.title}
              </span>
            ))}
          </button>
        </div>

        <div className="flex gap-5">
          <div className="flex-3 flex flex-col gap-8">
            <Panel>
              <div className="flex flex-col gap-5">
                <p className="text-xl font-bold">Profile</p>

                <div className="flex gap-6 items-center">
                  <div className="relative flex">
                    <ProfileIcon size={120} />
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-sky-800 border-2 border-white text-white rounded-full absolute bottom-0 right-0">
                      <LuCamera size={20} />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <TextButton backgroundColor="#0369a1" color="#ffffff">
                      Upload New
                    </TextButton>
                    <TextButton backgroundColor="#e0e0e0">
                      Delete Avatar
                    </TextButton>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <PrimaryInput placeHolder="First name" label="First Name" />
                  <PrimaryInput placeHolder="Last name" label="Last Name" />
                  <PrimaryInput placeHolder="name@example.com" label="Email" />
                  <PrimaryInput
                    placeHolder="Mobile Number"
                    label="Mobile Number"
                  />
                </div>
              </div>
            </Panel>
          </div>

          <div className="flex-2">
            <Panel />
          </div>
        </div>
      </div>
    </Section>
  );
}
