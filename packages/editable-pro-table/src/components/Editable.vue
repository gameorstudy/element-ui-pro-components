<script>
  import { t } from 'element-ui-pro-components/src/locale'
  
  export default {
    name: 'Editable',
    props: {
      // 可编辑配置
      editable: {
        type: Object,
        required: true
      },
      actions: {
        type: Object,
        required: true
      },
      validateRow: {
        type: Function
      },
      recordKey: {
        type: [String, Number],
      },
      render: {
        type: Function,
        required: true
      },
      scope: {
        type: Object
      },
      newLineRecordCache: {
        type: Object
      },
      name: {
        type: String
      },
      preEditRows: {
        type: Map
      },
      defaultSize: {
        type: String
      }
    },
    computed: {
      isEditable() {
        const { editable: { editableKeys }, recordKey } = this
        return editableKeys?.some(key => recordKey === key)
      },
      isNewLineRecordCache() {
        return this.newLineRecordCache?.options.recordKey === this.recordKey
      }
    },
    data() {
      return {
        saveLoading: false,
        deleteLoading: false,
        visible: false
      }
    },
    methods: {
      /**
       * @desc 保存
       */
      async save() {
        // 手动销毁
        this.visible = false
        const { validateRow, scope: { row, $index }, recordKey } = this
        const res = await validateRow($index)
        if (!res) {
          return
        }
        try {
          this.saveLoading = true
          const res = await this.editable.onSave?.(recordKey, row, this.preEditRows.get(recordKey))
          this.saveLoading = false
          if (res === false) {
            return
          }
          this.actions.cancelEditable(recordKey, row)
        } catch (err) {
          this.saveLoading = false
          console.error('err', err)
        }
      },
      /**
       * @desc 删除
       */
      async delete() {
        try {
          this.deleteLoading = true
          const { scope: { row }, recordKey } = this
          const res = await this.editable.onDelete?.(recordKey, row)
          this.deleteLoading = false
          if (res === false) {
            return
          }
          this.visible = false
          await this.actions.cancelEditable(recordKey, row)
          this.$emit('delete', recordKey)
        } catch (err) {
          this.deleteLoading = false
          console.error('err', err)
        }
      },
      /**
       * @desc 取消
       */
      async cancel() {
        try {
          // 手动销毁
          this.visible = false
          const { recordKey, scope: { row, $index } } = this
          await this.actions.cancelEditable(recordKey, row)
          this.$emit('cancel', recordKey, $index)
        } catch (err) {
          console.error('err', err)
        }
      }
    },
    render: function(h) {
      const { saveText, deleteText, cancelText, deletePopconfirmMessage } = this.editable
      const { defaultSize } = this
      const doms = {
        save: <el-button class="btn-save" type="text" size={defaultSize} loading={this.saveLoading} onClick={this.save} key="save">{ saveText }</el-button>,
        delete: <el-popover
          placement="top"
          popper-class="editable-pro-table__popover--delete"
          trigger="click"
          value={this.visible}
          onInput={val => this.visible = val}
          key="delete"
        >
          <i class="el-icon-info"></i>
          <span>{deletePopconfirmMessage}</span>
          <div>
            <el-button size="mini" type="text" onClick={() => this.visible = false}>{ t('elProComponents.editableProTable.cancelButtonText') }</el-button>
            <el-button type="primary" size="mini" loading={this.deleteLoading} onClick={this.delete}>{ t('elProComponents.editableProTable.confirmButtonText') }</el-button>
          </div>
          <el-button slot="reference" type="text" size={defaultSize}>{ deleteText }</el-button>
        </el-popover>,
        cancel: <el-button class="btn-cancel" type="text" size={defaultSize} onClick={this.cancel} key="cancel">{ cancelText }</el-button>,
      }

      const {
        editable: 
          { editableKeys, onChange, onSave, onDelete, onCancel, actionRender },
        scope: { row },
        isNewLineRecordCache
      } = this

      const { recordKey, scope: { $index }, actions: { cancelEditable, addEditRecord }, name, newLineRecordCache } = this
      const config = {
        editableKeys,
        setEditableRowKeys: (keys) => onChange?.(keys),
        recordKey,
        preEditRow: this.preEditRows.get(recordKey),
        index: $index,
        onSave,
        onDelete,
        onCancel,
        cancelEditable,
        newLineConfig: newLineRecordCache,
        saveText,
        deleteText,
        cancelText,
        deletePopconfirmMessage,
        addEditRecord,
        tableName: name
      }

      const defaultDoms = [doms.save, !isNewLineRecordCache && doms.delete, doms.cancel].filter(Boolean)
      const actionDoms = typeof actionRender === 'function' ? actionRender(row, config, doms) : defaultDoms

      return <Fragment>
        {this.isEditable ? actionDoms : this.render(this.actions)}
      </Fragment>
    }
  }
</script>

<style scoped>
.btn-save + span {
  margin-left: 10px;
}

span + :deep(.btn-cancel) {
  margin-left: 10px;
}
</style>

<style lang="less">
.editable-pro-table__popover--delete.el-popover {
  min-width: unset;
  
  > i {
    color: rgb(255, 153, 0);
    margin-right: 5px;
  }

  > div {
    margin-top: 10px;
    margin-left: 8px;
  }
}
</style>
