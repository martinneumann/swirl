import { createStaticPathsData } from "@swirl/lib/docs";
import { generateMdxFromDocumentation } from "@swirl/lib/docs/src/singleDoc";
import { MDXRemote } from "next-mdx-remote";
import IframeResizer from "iframe-resizer-react";
import { DocCategory, DocHeadline } from "@swirl/lib/docs/src/docs.model";
import Head from "next/head";
import { DocumentationLayout } from "src/components/Layout/DocumentationLayout";
import { createLinkLists } from "@swirl/lib/docs/src/links";
import { LinkedHeaders } from "src/components/Navigation/LinkedHeaders";

async function getComponentData(document: string) {
  return await generateMdxFromDocumentation("icons", document);
}

export async function getStaticPaths() {
  const categoryDocs = createStaticPathsData("icons");

  return {
    paths: categoryDocs,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { documentLinkList, categoryLinkList } = createLinkLists(
    "icons",
    context.params.id
  );
  const document = await getComponentData(context.params.id);

  return {
    props: {
      document,
      documentLinkList,
      categoryLinkList,
      title: context.params.id,
    },
  };
}

export default function Component({
  document,
  categoryLinkList,
  documentLinkList,
  title,
}: {
  document: any;
  categoryLinkList: DocCategory[];
  documentLinkList: DocHeadline[];
  title: string;
}) {
  const components = {
    ...LinkedHeaders,
  };
  return (
    <>
      <Head>
        <title>Swirl Components | {title}</title>
      </Head>
      <DocumentationLayout
        documentLinkList={documentLinkList}
        categoryLinkList={categoryLinkList}
      >
        <article className="prose">
          <MDXRemote {...document} components={components} />
        </article>
      </DocumentationLayout>
    </>
  );
}
