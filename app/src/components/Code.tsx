'use client';

import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { Highlight, themes } from 'prism-react-renderer';

function Code({ codeBlock }: {codeBlock: string}) {
  return (
    <div className='p-6 w-full max-w-fit bg-[#282C34] rounded-xl shadow'>
      <ScrollArea>
        <Highlight theme={themes.oneDark} code={codeBlock} language='tsx'>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre style={style} className={cn(className, 'w-fit')}>
              {tokens.map((line, i) => {
                const { key, ...rest } = getLineProps({ line, key: i });
                return (
                  <div key={i} style={{ position: 'relative' }} {...rest}>
                    <span className='text-zinc-500 select-none pr-8 '>{i + 1}</span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </div>
  );
}

export default Code;