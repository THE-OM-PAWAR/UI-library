import { Separator } from "@radix-ui/react-separator"
import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
  LockKeyhole,
} from "lucide-react"



export function renderInputGroup({InputGroup,
  InputGroupAddon,
  InputGroupInput,InputGroupButton,InputGroupText,InputGroupTextarea}) {
  return (
    <div className="grid w-full max-w-sm gap-6">
      
      <InputGroup>
          <SearchIcon />
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
          <MailIcon />
        <InputGroupInput type="email" placeholder="Enter your email" />
        <InputGroupAddon>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
          <LockKeyhole/>
        <InputGroupInput type="password" placeholder="Enter Password" />
        <InputGroupAddon>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
          <CreditCardIcon />
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
       <InputGroup>
          <InputGroupTextarea 
            id="block-end-textarea"
            placeholder="Write a comment..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="default" size="sm" className="ml-auto">
              Post
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
 
     
    </div>
  )
}
