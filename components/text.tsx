type TextProps = {
  children?: string;
  bold?: number;
  size?: number;
  color?: string;
};

export default function Text({
  children,
  bold,
  size,
  color,
}: TextProps) {
  const style = {
    fontWeight: bold,
    fontSize: size,
    color: color,
  };
  return <div style={style}>{children}</div>;
}
