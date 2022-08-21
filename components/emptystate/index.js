import styles from "../Tabs/tabs.module.css";
import emptyStateImage from "../../public/Group 26795.png";
import Image from "next/image";
const EmptyState = ({ text, font }) => {
  return (
    <div className={styles.emptystateWrap}>
      <div>
        <Image src={emptyStateImage} className="h-[500px] w-[500px]" />
      </div>
      <p className={font && " font-monument text-[60px]"}>{text}</p>
    </div>
  );
};

export { EmptyState };
