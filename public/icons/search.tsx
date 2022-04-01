type SearchProps = {
  width?: number | string;
  styles?: object;
  color?: string;
};

export default function Search({ width = "32", styles, color }: SearchProps) {
  return (
    <svg
      style={styles}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2046"
      width={width}
      height={width}
      fill={color}
    >
      <title id="title">Search Icon</title>
      <path
        d="M1012.4 957.8L685 630.3c54.5-66.6 87.3-151.6 87.3-244.2 0-212.8-173.2-386-386-386S0.3 173.3 0.3 386.1s173.2 386 386 386c92.4 0 177.4-32.7 243.9-87.1l327.5 327.5c15.1 15.1 39.6 15.1 54.8 0 15.1-15.1 15.1-39.6-0.1-54.7zM72.2 386.1c0-173.1 140.9-314 314-314s314 140.9 314 314-140.9 314-314 314-314-140.8-314-314z"
        p-id="3295"
      ></path>
    </svg>
  );
}
