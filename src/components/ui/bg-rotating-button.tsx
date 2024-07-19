const AnimatedRotatingButton = ({ children } : { children: React.ReactNode }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 shadow-3xl">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff002c_0%,#B0B0B0_50%,#ff002c_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#ff002c_0%,#333333_50%,#ff002c_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-8 py-1 text-sm font-medium text-white backdrop-blur-xl">
        {children}
      </span>
    </button>
  );
};

export default AnimatedRotatingButton;
