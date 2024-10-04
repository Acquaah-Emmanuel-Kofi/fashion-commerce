import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav
      className="flex items-center space-x-2 text-xs text-gray-500"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center font-beatrice">
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className="hover:text-gray-700">
              {item.label}
            </Link>
          ) : (
            <span
              className={`${
                index === items.length - 1 ? "font-bold text-gray-800" : ""
              }`}
            >
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <span className="font-medium ml-1 -mr-1">&#47;</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
