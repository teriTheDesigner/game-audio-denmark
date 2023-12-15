import styles from "@/app/components/NewMembershipCards/NewMembershipCards.module.css";
import Link from "next/link";
export default function NewMembershipCards() {
  return (
    <section id="membership" className={`${styles.section} grid-component`}>
      <h2>Membership </h2>
      <p className={styles.text1}>
        By becoming a member, you will directly contribute to building our
        association of Game Audio Enthusiasts. We will soon release more
        information about membership benefits! We can promise that this will
        consist of hands-on workshops, webinars with industry experts, and an
        upcoming mentorship program.
      </p>
      <p className={styles.text2}>
        The price is valid for the first year and only applies to new customers.
        After this the membership is at full price.
      </p>
      <div className={styles.membership}>
        <div className={styles.card}>
          <p className={styles.title}>Supporter</p>
          <div className={styles.priceDiv}>
            <p className={styles.dkk}>dkk</p>
            <p className={styles.priceAmount}>200</p>
          </div>
          <p className={styles.description}>
            Only want to support us financially? Become a supporter for single
            time fee!
          </p>
          <div className={styles.divForinit4u}>
            <ul className={styles.init4u}>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Become a supporter
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
                No membership
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
                Can't vote or be in the board
              </li>
            </ul>
          </div>
          <Link href="/signup" className={styles.link}>
            SIGN UP
          </Link>
        </div>
        <div className={styles.cardMiddle}>
          <p className={styles.title}>Student</p>
          <div className={styles.priceDiv}>
            <p className={styles.dkk}>dkk</p>
            <p className={styles.priceAmount}>250</p>
          </div>
          <p className={styles.description}>
            Discounted membership price for students and recent graduated
          </p>
          <div className={styles.divForinit4u}>
            <ul className={styles.init4u}>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Discounted membership price
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Can vote
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Be a board member
              </li>
            </ul>
          </div>
          <Link href="/signup" className={styles.linkMiddle}>
            SIGN UP
          </Link>
        </div>
        <div className={styles.card}>
          <p className={styles.title}>General</p>
          <div className={styles.priceDiv}>
            <p className={styles.dkk}>dkk</p>
            <p className={styles.priceAmount}>500</p>
          </div>
          <p className={styles.description}>
            Become a general member and enjoy all of these great benefits!
          </p>
          <div className={styles.divForinit4u}>
            <ul className={styles.init4u}>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Full member price
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Can vote
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                Be a board member
              </li>
            </ul>
          </div>
          <Link href="/signup" className={styles.link}>
            SIGN UP
          </Link>
        </div>
      </div>
    </section>
  );
}
