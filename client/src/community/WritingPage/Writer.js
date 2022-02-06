import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Writer = ({ data }) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          data(editor.getData());
        }}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "NumberedList",
            "|",
            "Block quote",
            "|",
            "Undo",
            "Redo",
          ],
          placeholder: "text here !",
        }}
      />
    </div>
  );
};

export default Writer;
