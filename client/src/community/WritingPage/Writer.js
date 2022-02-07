import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Writer = ({ handleChange, content }) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          handleChange(editor.getData());
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
          value: content,
        }}
      />
    </div>
  );
};

export default Writer;
