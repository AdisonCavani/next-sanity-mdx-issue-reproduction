import { ComponentProps, memo, Suspense } from "react";
import { DefaultDocumentNodeResolver, UserViewComponent } from "sanity/desk";

const previewDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component((props: ComponentProps<UserViewComponent>) => (
        <PreviewPanel {...props} />
      ))
      .title("Preview"),
  ]);
};

function PreviewPanel(props: ComponentProps<UserViewComponent>) {
  const { document } = props;

  const { displayed } = document;
  const documentType = displayed?._type;
  let slug = (displayed?.slug as any)?.current;

  if (!documentType) {
    return <p>Unknown documentType: {documentType}</p>;
  }

  const href = "/";

  if (!href) {
    return <p>Please add a slug to the post to see the preview!</p>;
  }

  return (
    <Suspense fallback={null}>
      <Iframe documentType={documentType} slug={slug} {...props} />
    </Suspense>
  );
}

type Props = {
  documentType?: string;
  slug?: string;
};

const Iframe = memo(({ documentType, slug }: Props) => {
  const url = new URL("/api/preview", location.origin);

  if (documentType) url.searchParams.set("documentType", documentType);

  if (slug) url.searchParams.set("slug", slug);

  return (
    <iframe
      style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
      src={url.toString()}
    />
  );
});

Iframe.displayName = "iFrame";

export { previewDocumentNode };
