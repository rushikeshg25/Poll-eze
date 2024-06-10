import { cn } from "@/lib/utils";

const Footer = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-full p-3 flex item-center justify-center  text-md text-[#8D8D95] text-wrap md:text-nowrap",
        className
      )}
    >
      Built by Rushikesh. Source code on&nbsp;
      <a
        href='https://github.com/rushikeshg25/Poll-eze'
        target='_blank'
        className='underline underline-offset-3 text-[#8D8D95]'
      >
        GitHub
      </a>
    </div>
  );
};

export default Footer;
