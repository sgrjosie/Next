type AlertProps = {
  width?: number | string;
  styles?: object;
  color?: string;
};

export default function Alert({ width = "32", styles, color }: AlertProps) {
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
      <title id="title">Alert Icon</title>
      <path
        d="M808 712l-48-108.8V448c0-102.4-65.6-195.2-160-232-3.2-44.8-41.6-80-88-80s-83.2 35.2-88 80c-96 36.8-160 129.6-160 232v155.2l-48 108.8c-6.4 14.4-4.8 30.4 3.2 43.2 8 12.8 22.4 20.8 38.4 20.8h508.8c16 0 30.4-8 38.4-20.8s9.6-30.4 3.2-43.2zM512 880c44.8 0 80-35.2 80-80H432c0 44.8 35.2 80 80 80z"
        p-id="2738"
      ></path>
    </svg>
  );
}
