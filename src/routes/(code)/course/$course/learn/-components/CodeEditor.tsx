import { useCodeMirror } from "@uiw/react-codemirror"
import { python } from "@codemirror/lang-python"
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night"
import { useRef, useEffect, useState } from 'react'

export function CodeEditor() {
  const editor = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useCodeMirror({
    container: mounted ? editor.current : null,
    value: "",
    extensions: [python()],
    theme: tokyoNight,
    width: "40vw",
    height: "70vh",
    placeholder: "Enter script here",
  })

  return <div style={{ width: "40vw", border: "1px solid #ccc" }} ref={editor} />
}