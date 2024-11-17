import { Chip, Divider, Skeleton, Spacer } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full pt-4">
        <div className="space-y-10 px-4 xl:space-y-16">
          <div className="flex flex-col items-start gap-4 lg:flex-row">
            <div className="w-full flex-1 lg:w-auto">
              <Skeleton className="bg-default-200 h-6 w-full rounded-lg" />
              <Spacer y={3} />
              <Skeleton className="bg-default-200 h-6 w-3/4 rounded-lg" />
              <Spacer y={3} />
              <div className="mt-4 flex w-full max-w-[300px] items-center gap-3">
                <div>
                  <Skeleton className="flex size-10 rounded-full" />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Skeleton className="h-3 w-3/5 rounded-lg" />
                  <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
              </div>
              <Spacer y={6} />
              <Skeleton className="bg-default-200 h-3 w-full rounded-lg" />
              <Spacer y={3} />
              <Skeleton className="bg-default-200 h-3 w-full rounded-lg" />
              <Spacer y={3} />
              <Skeleton className="bg-default-200 h-3 w-full rounded-lg" />
              <Spacer y={3} />
              <Skeleton className="bg-default-200 h-3 w-full rounded-lg" />
              <Spacer y={3} />
              <Skeleton className="bg-default-200 h-3 w-4/5 rounded-lg" />
              <Spacer y={3} />
              <Skeleton className="bg-default-200 h-3 w-2/3 rounded-lg" />
              <Spacer y={3} />
              <Skeleton className="bg-default-200 h-3 w-4/5 rounded-lg lg:hidden" />
              <Spacer className="lg:hidden" y={3} />
              <Skeleton className="bg-default-200 h-3 w-2/3 rounded-lg lg:hidden" />
              <Spacer className="lg:hidden" y={3} />
              <Skeleton className="bg-default-200 h-3 w-4/5 rounded-lg lg:hidden" />
              <Spacer className="lg:hidden" y={3} />
              <Skeleton className="bg-default-200 h-3 w-1/2 rounded-lg lg:hidden" />
              <Spacer className="lg:hidden" y={6} />
              <div>
                <Spacer y={2} />
                <Skeleton className="bg-default-200 h-3 w-full rounded-lg" />
                <Spacer y={2} />
                <Skeleton className="bg-default-200 h-3 w-full rounded-lg" />
                <Spacer className="lg:hidden" y={2} />
                <Skeleton className="bg-default-200 h-3 w-full rounded-lg lg:hidden" />
                <Spacer className="lg:hidden" y={2} />
                <Skeleton className="bg-default-200 h-3 w-full rounded-lg lg:hidden" />
              </div>
              <Spacer y={6} />
              <div>
                <Spacer y={2} />
                <ul>
                  <li className="py-2 text-sm">
                    <Skeleton className="h-3 w-full rounded-lg" />
                  </li>
                  <li className="py-2 text-sm">
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                  </li>
                  <li className="py-2 text-sm">
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                  </li>
                  <li className="py-2 text-sm">
                    <Skeleton className="h-3 w-2/3 rounded-lg" />
                  </li>
                  <li className="py-2 text-sm lg:hidden">
                    <Skeleton className="h-3 w-2/3 rounded-lg" />
                  </li>
                  <li className="py-2 text-sm lg:hidden">
                    <Skeleton className="h-3 w-1/2 rounded-lg" />
                  </li>
                  <li className="py-2 text-sm lg:hidden">
                    <Skeleton className="h-3 w-2/3 rounded-lg" />
                  </li>
                  <li className="py-2 text-sm lg:hidden">
                    <Skeleton className="h-3 w-3/4 rounded-lg" />
                  </li>
                  <li className="py-2 text-sm lg:hidden">
                    <Skeleton className="h-3 w-1/3 rounded-lg" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col items-center justify-center gap-4">
                <Chip
                  variant="bordered"
                  startContent={
                    <div className="bg-success-500 relative mx-1 size-2 rounded-full">
                      <div className="bg-success-500 size-2 animate-ping rounded-full " />
                    </div>
                  }
                >
                  Live Preview
                </Chip>
                <Skeleton className="bg-default-200 h-[604px] w-[320px] rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider className="my-12" />
    </div>
  );
}
