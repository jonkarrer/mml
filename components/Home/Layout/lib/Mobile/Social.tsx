import { FC } from "react";

const Social: FC = () => {
  const wrapper = `grid place-content-center rounded-base hover:opacity-80`;
  return (
    <div className="absolute bottom-10 left-0 right-0 grid grid-flow-col gap-9 w-max m-auto">
      <a href="https://discord.gg/jjDcZcqXWy" className={wrapper}>
        <Discord />
      </a>
      <a href="https://twitter.com/MarketMakerLite" className={wrapper}>
        <Twitter />
      </a>
      <a href="https://www.reddit.com/r/Marketmakerlite/" className={wrapper}>
        <Reddit />
      </a>

      <a href="https://github.com/MarketMakerLite" className={wrapper}>
        <Github />
      </a>

      <a href="/contact" className={wrapper}>
        <Email />
      </a>
    </div>
  );
};

export default Social;

const Discord = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.4213 5.09361C16.6437 3.66508 13.8329 3.42308 13.7141 3.41281C13.5263 3.39668 13.3481 3.50301 13.2711 3.67461C13.2682 3.68048 13.1113 4.13588 12.9595 4.57514C15.0253 4.93668 16.4289 5.73894 16.5037 5.78294C16.8542 5.98681 16.9715 6.43634 16.7669 6.78614C16.6313 7.01934 16.3856 7.14987 16.1333 7.14987C16.0079 7.14987 15.8818 7.11834 15.7659 7.05087C15.7454 7.03841 13.6862 5.86654 11.0015 5.86654C8.316 5.86654 6.25607 7.03914 6.23554 7.05087C5.88574 7.25401 5.43694 7.13448 5.2338 6.78394C5.03067 6.43488 5.14874 5.98681 5.4978 5.78294C5.5726 5.73894 6.98134 4.93374 9.053 4.57294C8.89314 4.12854 8.7318 3.68048 8.72887 3.67461C8.65187 3.50228 8.47367 3.39374 8.28594 3.41281C8.16714 3.42234 5.35627 3.66434 3.5552 5.11268C2.6136 5.98241 0.733337 11.0673 0.733337 15.4637C0.733337 15.5414 0.753137 15.6169 0.792004 15.6844C2.09074 17.9651 5.63127 18.562 6.43794 18.5877C6.44307 18.5884 6.44747 18.5884 6.45187 18.5884C6.59414 18.5884 6.72834 18.5202 6.81267 18.4051L7.68534 17.2229C5.77134 16.7617 4.75934 16.0364 4.69847 15.9917C4.37287 15.7519 4.30247 15.2928 4.54227 14.9665C4.78134 14.6416 5.23894 14.5697 5.56454 14.8081C5.59167 14.8257 7.45947 16.1332 11 16.1332C14.5545 16.1332 16.4171 14.8205 16.4355 14.8073C16.7611 14.5712 17.2201 14.6423 17.4585 14.9694C17.6961 15.295 17.6271 15.7511 17.303 15.9902C17.2421 16.0349 16.2353 16.7587 14.3257 17.22L15.1873 18.4043C15.2717 18.5202 15.4059 18.5877 15.5481 18.5877C15.5533 18.5877 15.5577 18.5877 15.5621 18.5869C16.3695 18.5613 19.91 17.9643 21.208 15.6837C21.2469 15.6162 21.2667 15.5407 21.2667 15.4629C21.2667 11.0673 19.3864 5.98241 18.4213 5.09361ZM8.06667 13.9332C7.25634 13.9332 6.6 13.1126 6.6 12.0999C6.6 11.0871 7.25634 10.2665 8.06667 10.2665C8.877 10.2665 9.53334 11.0871 9.53334 12.0999C9.53334 13.1126 8.877 13.9332 8.06667 13.9332ZM13.9333 13.9332C13.123 13.9332 12.4667 13.1126 12.4667 12.0999C12.4667 11.0871 13.123 10.2665 13.9333 10.2665C14.7437 10.2665 15.4 11.0871 15.4 12.0999C15.4 13.1126 14.7437 13.9332 13.9333 13.9332Z"
      className="fill-current text-white"
    />
  </svg>
);
const Twitter = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5333 5.087C19.8315 5.39866 19.0777 5.6084 18.2864 5.703C19.0945 5.219 19.7142 4.45266 20.0061 3.53893C19.2507 3.987 18.4133 4.3126 17.5215 4.4886C16.808 3.72813 15.7916 3.25293 14.6667 3.25293C12.5063 3.25293 10.7551 5.00486 10.7551 7.16453C10.7551 7.47106 10.7903 7.77026 10.8563 8.05553C7.60541 7.89273 4.72341 6.33513 2.79328 3.96793C2.45741 4.5458 2.26454 5.21753 2.26454 5.93546C2.26454 7.29213 2.95461 8.48966 4.00401 9.19073C3.36308 9.1702 2.75954 8.9942 2.23228 8.7016C2.23228 8.71846 2.23228 8.73386 2.23228 8.75073C2.23228 10.6464 3.58014 12.2275 5.37021 12.5861C5.04241 12.6755 4.69628 12.7232 4.33914 12.7232C4.08761 12.7232 3.84194 12.6983 3.60361 12.6535C4.10154 14.2075 5.54621 15.339 7.25781 15.3705C5.91948 16.4199 4.23281 17.0455 2.39948 17.0455C2.08414 17.0455 1.77248 17.0271 1.46594 16.9905C3.19734 18.1 5.25288 18.7475 7.46241 18.7475C14.6579 18.7475 18.5915 12.787 18.5915 7.61773C18.5915 7.44833 18.5878 7.27966 18.5805 7.11173C19.3453 6.55953 20.009 5.87093 20.5333 5.087Z"
      className="fill-current text-white"
    />
  </svg>
);
const Reddit = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7765 0C10.377 0 9.33269 1.37051 9.33269 2.92969V5.62813C7.49738 5.74487 5.81893 6.33149 4.47902 7.25156C3.96266 6.65712 3.27126 6.39316 2.60089 6.39375C1.87406 6.39439 1.13103 6.69633 0.618498 7.3875L0.606767 7.40313L0.595037 7.41875C0.10338 8.15538 -0.0912996 9.1422 0.0398109 10.1219C0.159548 11.0166 0.591782 11.9147 1.34316 12.5031C1.33824 12.6024 1.32491 12.6997 1.32491 12.8C1.32491 16.7696 5.21669 20 10 20C14.7833 20 18.6751 16.7696 18.6751 12.8C18.6751 12.6997 18.6618 12.6024 18.6568 12.5031C19.4082 11.9147 19.8405 11.0166 19.9602 10.1219C20.0913 9.1422 19.8966 8.15538 19.405 7.41875L19.3932 7.40313L19.3815 7.3875C18.8689 6.69624 18.126 6.39439 17.3991 6.39375C16.7287 6.39316 16.0372 6.65691 15.521 7.25156C14.1811 6.33149 12.5026 5.74487 10.6673 5.62813V2.92969C10.6673 2.14647 11.0445 1.6 11.7765 1.6C12.1239 1.6 12.5472 1.80872 13.2101 2.0875C13.7706 2.32317 14.4999 2.56136 15.4324 2.63281C15.6554 3.42327 16.2746 4 17.0068 4C17.9244 4 18.6751 3.1 18.6751 2C18.6751 0.9 17.9244 0 17.0068 0C16.3803 0 15.8374 0.424337 15.5523 1.04062C14.7552 0.987704 14.1695 0.795766 13.652 0.578125C13.0489 0.324502 12.4947 0 11.7765 0ZM2.60089 7.99375C2.86457 7.99352 3.1151 8.07648 3.32164 8.21094C2.58493 8.94814 2.02597 9.80946 1.68855 10.75C1.50938 10.4849 1.40142 10.1872 1.3588 9.86875C1.28689 9.33139 1.42102 8.77284 1.63381 8.44219C1.83489 8.18272 2.20207 7.9941 2.60089 7.99375ZM17.3978 7.99375C17.7967 7.9941 18.1652 8.18279 18.3662 8.44219C18.579 8.77284 18.7131 9.33139 18.6412 9.86875C18.5986 10.1872 18.4906 10.4849 18.3115 10.75C17.974 9.80946 17.4151 8.94814 16.6784 8.21094C16.8844 8.07663 17.1342 7.99352 17.3978 7.99375ZM6.66343 9.6C7.40081 9.6 7.99806 10.316 7.99806 11.2C7.99806 12.084 7.40081 12.8 6.66343 12.8C5.92604 12.8 5.3288 12.084 5.3288 11.2C5.3288 10.316 5.92604 9.6 6.66343 9.6ZM13.3366 9.6C14.074 9.6 14.6712 10.316 14.6712 11.2C14.6712 12.084 14.074 12.8 13.3366 12.8C12.5992 12.8 12.0019 12.084 12.0019 11.2C12.0019 10.316 12.5992 9.6 13.3366 9.6ZM13.4956 14.0266C13.0692 15.5202 11.7057 16.8 10 16.8C8.29434 16.8 6.93083 15.5208 6.50442 14.1344C7.27183 14.8808 8.55059 15.4141 10 15.4141C11.4494 15.4141 12.7282 14.8802 13.4956 14.0266Z"
      className="fill-current text-white"
    />
  </svg>
);
const Email = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.66665 3.66675H18.3333C19.3417 3.66675 20.1667 4.49175 20.1667 5.50008V16.5001C20.1667 17.5084 19.3417 18.3334 18.3333 18.3334H3.66665C2.65831 18.3334 1.83331 17.5084 1.83331 16.5001V5.50008C1.83331 4.49175 2.65831 3.66675 3.66665 3.66675Z"
      className="stroke-current text-white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.1667 5.5L11 11.9167L1.83331 5.5"
      className="stroke-current text-white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Github = () => (
  <svg
    width="26"
    height="30"
    viewBox="0 0 35 35"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 2.91675C15.5849 2.91675 13.6885 3.29396 11.9192 4.02684C10.1498 4.75972 8.54217 5.83392 7.18799 7.18811C4.45308 9.92301 2.91663 13.6323 2.91663 17.5001C2.91663 23.9459 7.10204 29.4147 12.8916 31.3542C13.6208 31.4709 13.8541 31.0188 13.8541 30.6251C13.8541 30.2897 13.8541 29.3709 13.8541 28.1605C9.81454 29.0355 8.95413 26.2063 8.95413 26.2063C8.28329 24.5147 7.33538 24.0626 7.33538 24.0626C6.00829 23.1584 7.43746 23.1876 7.43746 23.1876C8.89579 23.2897 9.66871 24.6897 9.66871 24.6897C10.9375 26.9063 13.0812 26.2501 13.9125 25.9001C14.0437 24.9522 14.4229 24.3105 14.8312 23.9459C11.5937 23.5813 8.19579 22.3272 8.19579 16.7709C8.19579 15.1522 8.74996 13.8542 9.69788 12.8188C9.55204 12.4542 9.04163 10.9376 9.84371 8.96883C9.84371 8.96883 11.0687 8.57508 13.8541 10.4563C15.0062 10.1355 16.2604 9.97508 17.5 9.97508C18.7395 9.97508 19.9937 10.1355 21.1458 10.4563C23.9312 8.57508 25.1562 8.96883 25.1562 8.96883C25.9583 10.9376 25.4479 12.4542 25.302 12.8188C26.25 13.8542 26.8041 15.1522 26.8041 16.7709C26.8041 22.3417 23.3916 23.5667 20.1395 23.9313C20.6645 24.3834 21.1458 25.273 21.1458 26.6292C21.1458 28.5834 21.1458 30.1584 21.1458 30.6251C21.1458 31.0188 21.3791 31.4855 22.1229 31.3542C27.9125 29.4001 32.0833 23.9459 32.0833 17.5001C32.0833 15.585 31.7061 13.6886 30.9732 11.9193C30.2403 10.1499 29.1661 8.5423 27.8119 7.18811C26.4577 5.83392 24.8501 4.75972 23.0808 4.02684C21.3114 3.29396 19.4151 2.91675 17.5 2.91675Z"
      className="fill-current text-white"
    />
  </svg>
);
