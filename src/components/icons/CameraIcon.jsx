const CameraIcon = ({ setSections }) => {
  return (
    <div onClick={setSections}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={22}
        fill="none"
      >
        <path
          fill="#262626"
          fillRule="evenodd"
          d="M16.574 1.372A3 3 0 0 0 14.054 0h-4.61a3 3 0 0 0-2.52 1.374L6.17 2.542A1 1 0 0 1 5.33 3H4.5A4.5 4.5 0 0 0 0 7.5v10A4.5 4.5 0 0 0 4.5 22H19a4.5 4.5 0 0 0 4.5-4.5v-10A4.5 4.5 0 0 0 19 3h-.83a1 1 0 0 1-.84-.457l-.756-1.17Zm-7.13.128h4.61a1.5 1.5 0 0 1 1.26.686l.756 1.17a2.5 2.5 0 0 0 2.1 1.144H19a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4.5a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h.83a2.5 2.5 0 0 0 2.1-1.145l.754-1.168a1.5 1.5 0 0 1 1.26-.687Zm2.306 5a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5ZM7.5 12.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default CameraIcon;
