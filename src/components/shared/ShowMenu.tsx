import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const ShowMenu = ({ user }: { user: { name: string; email: string; image?: string | null } }) => {
   const router = useRouter()
   const handleSignOut = async() => {
      const data = await authClient.signOut()

      if(data) {
         router.refresh()
         router.push('/sign-in')
      }
   }
  return (
    <>
      <Popover>
        <PopoverTrigger
        nativeButton= {false}
          render={
            <Avatar className='cursor-pointer'>
              <AvatarImage src={user.image ?? undefined} alt="@shadcn" />
              <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
              <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
          }
        />
        <PopoverContent align="start" className='space-x-2'>
          <PopoverHeader>
            <PopoverTitle>{user.name}</PopoverTitle>
            <PopoverDescription>{user.email}</PopoverDescription>
            <Button variant="destructive" className='mt-6 cursor-pointer' onClick={handleSignOut}>Sign Out</Button>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ShowMenu;
