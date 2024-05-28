import styles from "./styles/step.module.scss";

export default function Step({ text }) {
  return (
    <div className="w-100 border rounded-1 p-2">
      <p className={`${styles["description"]} m-2`}>{text}</p>
    </div>
  );
}
