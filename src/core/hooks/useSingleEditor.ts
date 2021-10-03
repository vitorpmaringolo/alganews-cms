import { useCallback, useState } from "react";
import { User, UserService } from "vitorpmaringolo-sdk";

export default function useSingleEditor() {
    const [editor, setEditor] = useState<User.EditorDetailed>();

    const fetchEditor = useCallback(
        async function(editorId: number){
            UserService.getExistingEditor(editorId).then(setEditor)
        }, []
    );

    return {
        fetchEditor,
        editor
    };
}