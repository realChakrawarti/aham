import StaticImage from "./static-image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <StaticImage
        src={picture}
        width={48}
        height={48}
        className="rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
