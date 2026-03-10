import { useCodeMirror } from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { useRef, useEffect, useState } from 'react'
import { EditorView } from '@uiw/react-codemirror'
import { Play } from 'lucide-react'
import { tokyoNight} from "@uiw/codemirror-theme-tokyo-night"

export function CodeEditor() {
  const editor = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  let myTheme = EditorView.theme(
    {
      '&': {
        backgroundColor: '#1e1e2e',
        borderBottomLeftRadius: "calc(var(--radius) /* 0.25rem = 4px */ + 8px)",
        borderBottomRightRadius: "calc(var(--radius) /* 0.25rem = 4px */ + 8px)",
        border: "none",
        overflow: "hidden"
      },
      '.cm-content': {
        caretColor: '#fff',
        backgroundColor: '#1e1e2e',
      },
      '&.cm-focused .cm-cursor': {
        borderLeftColor: '#0e9',
      },
      '&.cm-focused .cm-selectionBackground, ::selection': {
        backgroundColor: '#074',
      },
      '.cm-gutters': {
        backgroundColor: '#12121c',
        color: '#ced7f5',
        border: 'none',
      },
    },
    { dark: true },
  )

  useCodeMirror({
    container: mounted ? editor.current : null,
    value: '',
    extensions: [python(), myTheme],
    theme: tokyoNight,
    height: '90vh',
    placeholder: 'Enter script here',
  })

  return (
  <div className='w-full border  h-[90vh] rounded-xl flex-1'>
    <div className='flex items-center justify-between px-4 py-2 bg-neutral-800 rounded-t-xl'>
      <h1>Python</h1>
      <button className='bg-green-700 px-2 py-1 flex items-center gap-2 rounded-md  text-md'><Play className='size-4'/> <span className='font-semibold'>Run</span></button>
    </div>
    <div style={{ fontSize: '16px'}} ref={editor} />
  </div> )
}
