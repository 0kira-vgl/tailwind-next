import { SettiingTabs } from "@/components/SettiingTabs";
import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import * as FileInput from "@/components/Form/FileInput";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettiingTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Matheus" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Henrique" />
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>

              <InputControl
                id="email"
                type="email"
                defaultValue="matheusgtiburcio@gmail.com"
              />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <InputRoot>
              <InputControl id="role" defaultValue="Product Designer" />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC−08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold strokeWidth={3} className="w-4 h-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic strokeWidth={3} className="w-4 h-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link strokeWidth={3} className="w-4 h-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List strokeWidth={3} className="w-4 h-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      strokeWidth={3}
                      className="w-4 h-4 text-zinc-500"
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button
              variant="outline"
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
