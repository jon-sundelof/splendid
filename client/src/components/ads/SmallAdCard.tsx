import styles from './SmallAdCard.module.scss';

const SmallAdCard = ({ ad }: any) => {
  return (
    <>
      {ad ? (
        <article className={styles.small_ad_container}>
          <img src={ad.pic} />
          <section>
            <span>{ad.title}</span>

            <span>{ad.price[0]} $ / Day</span>
          </section>
        </article>
      ) : null}
    </>
  );
};

export default SmallAdCard;
