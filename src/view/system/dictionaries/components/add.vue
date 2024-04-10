<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
const emit = defineEmits(["childClose"]);
const ruleForm = reactive({
  userName: "",
  level: "",
  password: "",
  checkPass: "",
  remark: "",
});
const validatePass = (rule, value, callback) => {
  if (ruleForm.checkPass !== "") {
    if (!ruleFormRef.value) return;
    ruleFormRef.value.validateField("checkPass", () => null);
  }
  callback();
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入验证密码"));
  } else if (value !== ruleForm.password) {
    callback(new Error("两次验证密码不一致"));
  } else {
    callback();
  }
};
const rules = reactive({
  userName: [
    { required: true, message: "请输入您的名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在3~5个字符之间", trigger: "blur" },
  ],
  level: [
    {
      required: true,
      message: "请选择等级",
      trigger: "change",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { validator: validatePass, trigger: "blur" },
  ],
  checkPass: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { validator: validatePass2, trigger: "blur" },
  ],
});
const ruleFormRef = ref();
const close = (submit) => {
  emit("childClose", submit);
};
const resetForm = (form) => {
  form.resetFields();
};
const submitForm = (form) => {
  form.validate((valid) => {
    if (valid) {
      ElMessage({
        message: "添加成功",
        type: "success",
      });
      close(ruleForm);
    } else {
      ElMessage.error("请先通过验证");
      return false;
    }
  });
};
</script>
<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名称" prop="userName">
      <el-input
        v-model="ruleForm.userName"
        clearable
        size="small"
        type="text"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="权限级别" prop="level">
      <el-select
        v-model="ruleForm.level"
        size="small"
        clearable
        placeholder="请选择"
      >
        <el-option label="Top0" value="1" />
        <el-option label="Top1" value="1" />
        <el-option label="Top2" value="2" />
        <el-option label="Top3" value="2" />
        <el-option label="Top4" value="2" />
        <el-option label="Top5" value="2" />
      </el-select>
    </el-form-item>
    <el-form-item label="用户密码" prop="password">
      <el-input
        v-model="ruleForm.password"
        size="small"
        type="password"
        show-password
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        size="small"
        type="password"
        show-password
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input
        v-model="ruleForm.remark"
        maxlength="200"
        type="textarea"
        show-word-limit
        :autosize="{
          minRows: 3,
          maxRows: 4,
        }"
        autocomplete="off"
      />
    </el-form-item>
  </el-form>
  <div class="handle">
    <el-button type="primary" @click="submitForm(ruleFormRef)">确认</el-button>
    <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    <el-button @click="close()">关闭</el-button>
  </div>
</template>
<style lang="less">
.handle {
  display: flex;
  justify-content: end;
}
</style>