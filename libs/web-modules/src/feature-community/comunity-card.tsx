import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@heroui/react";

interface CommunityCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkText: string;
  icon?: React.ReactNode;
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  subtitle,
  description,
  link,
  linkText,
  icon,
}) => {
  return (
    <Card fullWidth>
      <CardHeader className="flex gap-3">
        <div className='className="border-divider border" size-8 rounded'>
          {icon}
        </div>
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{subtitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={link}>
          {linkText}
        </Link>
      </CardFooter>
    </Card>
  );
};
