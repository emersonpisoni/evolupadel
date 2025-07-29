import { LoginForm } from '@/components/login-form'
import { createFileRoute } from '@tanstack/react-router'
import { GalleryVerticalEnd } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Emershow dev.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className={`bg-[url(/src/assets/splash.png)] bg-muted relative hidden min-[1500px]:bg-[url(/src/assets/splash2.png)] lg:block bg-cover bg-center dark:brightness-[0.4]`} />
    </div>
  )
}