export default function HeroButton() {
  return (
    <>
      <button className="mt-5 hidden bg-white px-14 py-3 font-medium duration-300 hover:opacity-60  md:block">
        더 알아보기
      </button>
      <button className=" w-full rounded-full bg-white py-2 font-bold transition-opacity duration-300 hover:opacity-70 md:hidden">
        더 알아보기
      </button>
    </>
  );
}
