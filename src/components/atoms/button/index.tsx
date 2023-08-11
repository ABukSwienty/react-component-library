export interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  return <button className="bg-blue-500 text-white">{label}</button>;
};
