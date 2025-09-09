type ElementTag = keyof JSX.IntrinsicElements;

type ContainerProps<T extends ElementTag = 'div'> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<JSX.IntrinsicElements[T], 'className' | 'children'>;

/**
 * Responsive page container with sensible paddings and a max width.
 */
export default function Container<T extends ElementTag = 'div'>({
  as,
  className = '',
  children,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as || 'div') as ElementTag;
  return (
    <Tag
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...(rest as object)}
    >
      {children}
    </Tag>
  );
}
