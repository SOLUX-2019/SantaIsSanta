import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Writer = ({ handleChange, data }) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          handleChange(editor.getData());
        }}
        data={data}
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
